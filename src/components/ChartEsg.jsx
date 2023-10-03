import { useState } from "react";

import ChartEsgCustomLegend from './ChartEsgCustomLegend';
import ChartEsgMainSelector from "./ChartEsgMainSelector"
import ChartEsgRef from "./ChartEsgRef";
import html2canvas from "html2canvas";
import pdfConverter from "jspdf";

// import CommonOptions from "../options/common_options";

import ChartEsgTitle from "./ChartEsgTitle";
import ChartEsgDownload from "./ChartEsgDownload";

import { Bar } from "react-chartjs-2";
import BarOptions from "../options/bar_options";

import { Line } from "react-chartjs-2";
import LineOptions from "../options/line_options";

import { Pie } from "react-chartjs-2";
import PieOptions from "../options/pie_options";

import { Doughnut } from "react-chartjs-2";
import DoughnutOptions from "../options/doughnut_options";

export default function ChartEsg({ chart }) {
    const [selector4Value, setSelector4Value] = useState('');
    const [selector4Index, setSelector4Index] = useState(0);
    const type4 = chart.elements_lvl4 ? chart.elements_lvl4[0].type : '';
    const chartType = type4 ? type4 : chart.type;
    const chartTitle = chart.title;
    const chartSubtitle = chart.subtitle;
    const chartData = chart.chartData ? chart.chartData[0] : null;
    const chartDatasets = chartData ? chartData.datasets : null;

    const chartData4 = chart.elements_lvl4 ? chart.elements_lvl4[selector4Index].chartData[0] : null;
    const chartFinalData = chartData ? chartData : chartData4;

    // download chart as image
    const downloadImage = () => {
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

    const handleChangeSelector4 = (e) => {
        setSelector4Value(e.target.value);
        setSelector4Index(e.target.selectedIndex);
    }

    const chartRender = () => {
        switch (chartType) {
            case "bar":
                return <Bar data={chartFinalData} options={BarOptions} />;
            case "line":
                return <Line data={chartFinalData} options={LineOptions} />;
            case "pie":
                return <Pie data={chartFinalData} options={PieOptions} />;
            case "doughnut":
                return <Doughnut data={chartFinalData} options={DoughnutOptions} />;
            default:
                return null;
        }
    };

    return (
        <>
            <div className="App__main" data-print>
                <div className="App__intro">
                    <ChartEsgTitle
                        title={chartTitle}
                        subtitle={chartSubtitle}
                    ></ChartEsgTitle>

                    <ChartEsgDownload
                        chartDownloadImage={downloadImage}
                        chartDownloadPdf={downloadPdf}
                    >
                    </ChartEsgDownload>
                </div>

                {chart.elements_lvl4 &&
                    <ChartEsgMainSelector
                        value={selector4Value}
                        name="name 4"
                        id="selector4"
                        options={chart.elements_lvl4}
                        onChange={handleChangeSelector4}
                    />
                }

                <div className="App__chart-container">
                    {chartRender()}
                </div>

                <div className="App__chart-bottom-content">
                    {chartDatasets && <ChartEsgCustomLegend data={chartDatasets} />}

                    <ChartEsgRef chartRef="[GRI 302-1/11.1.2]"></ChartEsgRef>
                </div>
            </div>
        </>
    );
}
