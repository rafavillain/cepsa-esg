import ChartEsgCustomLegend from './ChartEsgCustomLegend';
import ChartEsgRef from "./ChartEsgRef";
import html2canvas from "html2canvas";
import pdfConverter from "jspdf";

// import CommonOptions from "../options/common_options";

import ChartEsgTitle from "./ChartEsgTitle";
import ChartEsgDownload from "./ChartEsgDownload";

import BarChart from "./BarChart";
import BarOptions from "../options/bar_options";

import LineChart from "./LineChart";
import LineOptions from "../options/line_options";

import PieChart from "./PieChart";
import PieOptions from "../options/pie_options";

import DoughnutChart from "./DoughnutChart";
import DoughnutOptions from "../options/doughnut_options";

export default function ChartEsg({ chartDataOrigin, chart, selector4 }) {
    const chartType = chart.type;
    const chartTitle = chart.title;
    const chartSubtitle = chart.subtitle;
    const chartData = chart.chartData ? chart.chartData[0] : null;
    const chartDatasets = chartData ? chartData.datasets : null;

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

    const chartRender = () => {
        switch (chartType) {
            case "bar":
                return <BarChart chartDataOrigin={chartDataOrigin} chartData={chartData} chartOptions={BarOptions} />;
            case "line":
                return <LineChart chartDataOrigin={chartDataOrigin} chartData={chartData} chartOptions={LineOptions} />;
            case "pie":
                return <PieChart chartDataOrigin={chartDataOrigin} chartData={chartData} chartOptions={PieOptions} />;
            case "doughnut":
                return <DoughnutChart chartDataOrigin={chartDataOrigin} chartData={chartData} chartOptions={DoughnutOptions} />;
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

                {chartRender()}

                <div className="App__chart-bottom-content">
                    {chartDatasets && <ChartEsgCustomLegend data={chartDatasets} />}

                    <ChartEsgRef chartRef="[GRI 302-1/11.1.2]"></ChartEsgRef>
                </div>
            </div>
        </>
    );
}
