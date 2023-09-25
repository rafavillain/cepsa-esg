import React, { useState, useRef, useCallback } from "react";
import Chart from "chart.js/auto";

import dataPie from "./data/data_pie";
import PieChart from "./components/PieChart";
import dataBar from "./data/data_bar";
import BarChart from "./components/BarChart";
import dataLine from "./data/data_line";
import LineChart from "./components/LineChart";

import { CategoryScale } from "chart.js";

import html2canvas from "html2canvas";
import pdfConverter from "jspdf";

Chart.register(CategoryScale);
 
export default function App() {
  let ref = useRef(null);
  const [state, setState] = useState({ selectedValue: '' });

  // on change type of chart
  const handleSelectChange = (event) => {
    setState({ selectedValue: event.target.value });
  };

  // download chart as image
  const downloadImage = useCallback(() => {
    const link = document.createElement("a");
    link.download = "chart.png";
    link.href = ref.current.toBase64Image();
    link.click();
  }, []);

  // download chart as pdf
  const downloadPdf = () => {
    // const but = e.target;
    // but.style.display = "none";
    let input = document.querySelector(".chart-container");

    html2canvas(input).then(canvas => {
      const img = canvas.toDataURL("image/png");
      const pdf = new pdfConverter("l", "pt");
      pdf.addImage(
        img,
        "png",
        input.offsetLeft,
        input.offsetTop,
        input.clientWidth,
        input.clientHeight
      );
      pdf.save("chart.pdf");
      // but.style.display = "block";
    });
  };

  return (
    <div className="App">
      <select value={state.selectedValue} onChange={handleSelectChange}>
        <option value="">Seleccionar gráfica</option>
        <option value="chart-pie">Tarta</option>
        <option value="chart-bar">Barras</option>
        <option value="chart-line">Línea</option>
      </select>

      {
        state.selectedValue === 'chart-pie' && 
          <PieChart 
            chartData={dataPie} 
            chartRef={ref} 
            chartDownloadImage={downloadImage} 
            chartDownloadPdf={downloadPdf} 
          />
      }
      {
        state.selectedValue === 'chart-bar' && 
          <BarChart 
            chartData={dataBar} 
            chartRef={ref} 
            chartDownloadImage={downloadImage} 
            chartDownloadPdf={downloadPdf} 
          />
      }
      {
        state.selectedValue === 'chart-line' && 
          <LineChart 
            chartData={dataLine} 
            chartRef={ref} 
            chartDownloadImage={downloadImage} 
            chartDownloadPdf={downloadPdf} 
          />
      }
    </div>
  );
}