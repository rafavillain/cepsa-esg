/* eslint-disable react/prop-types */
import { Line } from "react-chartjs-2";

function LineChart({ chartData, chartRef, chartDownloadImage, chartDownloadPdf }) {
  return (
    <div className="chart-container">
      <button type="button" onClick={chartDownloadImage}>Download as image</button>
      <button onClick={chartDownloadPdf}>Download as PDF</button>

      <Line ref={chartRef} data={chartData} />
    </div>
  );
}
export default LineChart;