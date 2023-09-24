// App.js
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import dataPie from "./data/data_pie.json";
import PieChart from "./components/PieChart";
import dataBar from "./data/data_bar.json";
import BarChart from "./components/BarChart";
import dataLine from "./data/data_line.json";
import LineChart from "./components/LineChart";
import { useState } from "react";
// import "./styles.css";

Chart.register(CategoryScale);
 
export default function App() {
  const [state, setState] = useState({ selectedValue: '' });

  const handleSelectChange = (event) => {
    setState({ selectedValue: event.target.value });
  };

  return (
    <div className="App">
      <select value={state.selectedValue} onChange={handleSelectChange}>
        <option value="">Seleccionar gráfica</option>
        <option value="chart-pie">Tarta</option>
        <option value="chart-bar">Barras</option>
        <option value="chart-line">Línea</option>
      </select>

      {state.selectedValue === 'chart-pie' && <PieChart chartData={dataPie} />}
      {state.selectedValue === 'chart-bar' && <BarChart chartData={dataBar} />}
      {state.selectedValue === 'chart-line' && <LineChart chartData={dataLine} />}
    </div>
  );
}