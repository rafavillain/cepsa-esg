/* eslint-disable react/prop-types */
import { Bar } from "react-chartjs-2";

function BarChart({ chartData }) {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Bar Chart</h2>
      <Bar data={chartData} />
    </div>
  );
}
export default BarChart;