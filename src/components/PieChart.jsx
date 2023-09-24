/* eslint-disable react/prop-types */
import { Pie } from "react-chartjs-2";

function PieChart({ chartData }) {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Pie Chart</h2>
      <Pie data={chartData} />
    </div>
  );
}
export default PieChart;