import { useState } from "react";

import ChartEsgCustomLegend from './ChartEsgCustomLegend';
import ChartEsgMainSelector from "./ChartEsgMainSelector"
import ChartEsgRef from "./ChartEsgRef";
import ChartEsgNote from "./ChartEsgNote";
import html2canvas from "html2canvas";
import pdfConverter from "jspdf";

// import CommonOptions from "../options/common_options";

import ChartEsgTitle from "./ChartEsgTitle";
import ChartEsgDownload from "./ChartEsgDownload";

import BarChart from "./BarChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import DoughnutChart from "./DoughnutChart";
import ScatterChart from "./ScatterChart";

import { chartBaseConfig } from '../config/base_config'
import { Chart } from 'chart.js'

chartBaseConfig(Chart)

export default function ChartEsg({ chart }) {
    const [selector4Value, setSelector4Value] = useState('');
    const [selector4Index, setSelector4Index] = useState(0);
    const chartElementsLvl4 = chart.elements_lvl4;
    const chartTitle = chart.title;
    const chartSubtitle = chart.subtitle;

    const chartType = chartElementsLvl4 ? chartElementsLvl4[0].type : chart.type;
    const chartOptions = chartElementsLvl4 ? chartElementsLvl4[selector4Index].options : chart.options;
    const chartNote = chartElementsLvl4 ? chartElementsLvl4[selector4Index].note : chart.note;
    const chartRefs = chartElementsLvl4 ? chartElementsLvl4[selector4Index].refs : chart.refs;
    
    const chartData = chart.chartData ? chart.chartData[0] : null;
    const chartData4 = chartElementsLvl4 ? chartElementsLvl4[selector4Index].chartData[0] : null;
    const chartFinalData = chartData ? chartData : chartData4;
    const chartDatasets = chartData ? chartData.datasets : null;
    const chartDatasets4 = chartData4 ? chartData4.datasets : null;
    const chartFinalDatasets = chartDatasets ? chartDatasets : chartDatasets4;

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

    const handleChangeSelector4 = (e) => {
        setSelector4Value(e.target.value);
        setSelector4Index(e.target.selectedIndex);
    }

    const chartRender = () => {
        switch (chartType) {
            case "bar":
                return <BarChart chartData={chartFinalData} chartOptions={chartOptions} />;
            case "line":
                return <LineChart chartData={chartFinalData} chartOptions={chartOptions} />;
            case "pie":
                return <PieChart chartData={chartFinalData} chartOptions={chartOptions} />;
            case "doughnut":
                return <DoughnutChart chartData={chartFinalData} chartOptions={chartOptions} />;
            case "scatter":
                return <ScatterChart chartData={chartFinalData} chartOptions={chartOptions} />;
            default:
                return null;
        }
    };

    return (
        <>
            <div className="App__main-outer">
                <ChartEsgDownload
                    chartDownloadImage={downloadImage}
                    chartDownloadPdf={downloadPdf}
                >
                </ChartEsgDownload>

                <div className="App__main" data-print>
                    <div className="App__intro">
                        <ChartEsgTitle
                            title={chartTitle}
                            subtitle={chartSubtitle}
                        ></ChartEsgTitle>

                        
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

                    {chartRender()}

                    <div className="App__chart-bottom-content">
                        <div className="App__chart-bottom-content-refs">
                            {chartFinalDatasets && 
                                <ChartEsgCustomLegend data={chartFinalDatasets} />
                            }

                            <ChartEsgRef chartRef={chartRefs} />
                        </div>
                        
                        <ChartEsgNote chartNote={chartNote} />
                    </div>
                </div>
            </div>
        </>
    );
}