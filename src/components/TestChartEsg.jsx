import ChartEsgCustomLegend from './ChartEsgCustomLegend';
import ChartEsgMainSelector from "./ChartEsgMainSelector"
import ChartEsgRef from "./ChartEsgRef";
import ChartEsgNote from "./ChartEsgNote";
import ChartEsgTitle from "./ChartEsgTitle";
import ChartEsgDownload from "./ChartEsgDownload";
import html2canvas from "html2canvas";
import pdfConverter from "jspdf";

import React, { useState, useEffect } from 'react';
import { Bar, Line, Doughnut, Scatter } from "react-chartjs-2";

import chartConfig from "../config/base_config"

export default function TestChartEsg({ data }) {
    // download chart as image
    const downloadImage = (e) => {
        let input = document.querySelector('[data-print]');

        html2canvas(input).then(canvas => {
            const img = canvas.toDataURL("image/png");
            const link = document.createElement("a");
            link.download = "chart.png";
            link.href = img;
            link.click();
        });
    };

    // download chart as pdf
    const downloadPdf = () => {
        let input = document.querySelector('[data-print]');

        html2canvas(input).then(canvas => {
            const img = canvas.toDataURL("image/png");
            const pdf = new pdfConverter("l", "pt");
            pdf.addImage(
                img,
                "JPEG",
                0,
                0
            );
            pdf.save("chart.pdf");
        });
    };

    return (
        <div className="App__main-outer">
            {data.map((chart) => {
                const chartId = chart.id
                const chartData = chart.chartData[0]
                const chartTitle = chart.title
                const chartSubtitle = chart.subtitle
                const chartType = chart.type
                const chartRefs = chart.refs
                const chartNote = chart.note
                const chartDatasets = chartData ? chartData.datasets : null;

                // base and common config
                const baseOptions = chartConfig(chart.options);
                // custom config, where we can add or rewrite base options
                const customOptions = {
                    barThickness: chart.options ? chart.options.barThickness : baseOptions.barThickness,
                    borderWidth: chart.options ? chart.options.borderWidth : baseOptions.borderWidth
                }
                const chartOptions = Object.assign(baseOptions, customOptions);

                return (
                    <div className="App__main" data-print key={chartId}>
                        <div className="App__intro">
                            <ChartEsgTitle
                                key={`title-of-${chartId}`}
                                title={chartTitle}
                                subtitle={chartSubtitle}
                            ></ChartEsgTitle>

                            <ChartEsgDownload
                                key={`download-of-${chartId}`}
                                chartDownloadImage={downloadImage}
                                chartDownloadPdf={downloadPdf}
                            >
                            </ChartEsgDownload>
                        </div>

                        <p>{chart[0]}</p>

                        {/* <ChartEsgMainSelector
                            value="value 4"
                            name="name 4"
                            id="selector4"
                            options={chart[0]}
                        /> */}

                        <div className="App__chart-container">
                            {chartType === 'bar' && <Bar data={chartData} options={chartOptions} />}
                            {chartType === 'line' && <Line data={chartData} options={chartOptions} />}
                            {chartType === 'doughnut' && <Doughnut data={chartData} options={chartOptions} />}
                            {chartType === 'scatter' && <Scatter data={chartData} options={chartOptions} />}
                        </div>

                        <div className="App__chart-bottom-content">
                            <div className="App__chart-bottom-content-refs">
                                {chartDatasets &&
                                    <ChartEsgCustomLegend data={chartDatasets} />
                                }

                                <ChartEsgRef chartRef={chartRefs} />
                            </div>

                            <ChartEsgNote chartNote={chartNote} />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}