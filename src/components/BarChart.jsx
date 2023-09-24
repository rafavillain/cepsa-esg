/* eslint-disable react/prop-types */
import { Bar } from "react-chartjs-2";

function BarChart({ chartData, chartRef, chartDownloadImage, chartDownloadPdf }) {
  return (
    <div className="chart-container">
      <button type="button" onClick={chartDownloadImage}>Download as image</button>
      <button onClick={chartDownloadPdf}>Download as PDF</button>

      <Bar ref={chartRef} data={chartData} />
    </div>
  );
}
export default BarChart;