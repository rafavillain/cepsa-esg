// import React, { useRef, useCallback } from "react";
import { Pie } from "react-chartjs-2";

function PieChart({ chartData, chartRef, chartDownloadImage, chartDownloadPdf}) {
  return (
    <div className="chart-container">
      <button type="button" onClick={chartDownloadImage}>Download as image</button>
      <button onClick={chartDownloadPdf}>Download as PDF</button>

      <Pie ref={chartRef} data={chartData} />
    </div>
  );
}
export default PieChart;