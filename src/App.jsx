import React, { useRef, useCallback } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import dataPie from "./data/data_pie";
import PieChart from "./components/PieChart";
import dataBar from "./data/data_bar";
import BarChart from "./components/BarChart";
import dataLine from "./data/data_line";
import LineChart from "./components/LineChart";
import { useState } from "react";
// import "./styles.css";

Chart.register(CategoryScale);
 
export default function App() {
  const [state, setState] = useState({ selectedValue: '' });

  const handleSelectChange = (event) => {
    setState({ selectedValue: event.target.value });
  };

  let ref = useRef(null);

  const downloadImage = useCallback(() => {
    const link = document.createElement("a");
    link.download = "chart.png";
    link.href = ref.current.toBase64Image();
    link.click();
  }, []);

  return (
    <div className="App">
      <select value={state.selectedValue} onChange={handleSelectChange}>
        <option value="">Seleccionar gráfica</option>
        <option value="chart-pie">Tarta</option>
        <option value="chart-bar">Barras</option>
        <option value="chart-line">Línea</option>
      </select>

      {state.selectedValue === 'chart-pie' && <PieChart chartData={dataPie} chartRef={ref} chartDownloadImage={downloadImage} />}
      {state.selectedValue === 'chart-bar' && <BarChart chartData={dataBar} />}
      {state.selectedValue === 'chart-line' && <LineChart chartData={dataLine} />}
    </div>
  );
}