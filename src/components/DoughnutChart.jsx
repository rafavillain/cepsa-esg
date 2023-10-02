import { Doughnut } from "react-chartjs-2";
import ChartEsgSelector from "./ChartEsgSelector";
import ChartEsgTitle from "./ChartEsgTitle";
import ChartCustomLegend from './ChartEsgLegend';
import ChartEsgRef from "./ChartEsgRef";
import ChartEsgDownload from "./ChartEsgDownload";
import html2canvas from "html2canvas";
import pdfConverter from "jspdf";

export default function DoughnutChart({ chartTitle, chartSubitle, chartData, chartOptions, chartSelector=true, chartDatasets }) {
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

    return (
        <>
            <div className="App__intro">
                <ChartEsgTitle
                    title={chartTitle}
                    subtitle={chartSubitle}
                ></ChartEsgTitle>
                <ChartEsgDownload
                    chartDownloadImage={downloadImage}
                    chartDownloadPdf={downloadPdf}
                >
                </ChartEsgDownload>
            </div>

            {chartSelector && <ChartEsgSelector />}

            <div className="App__chart-container">
                <Doughnut
                    data={chartData}
                    options={chartOptions} 
                />
            </div>

            <div className="App__chart-bottom-content">
                <ChartCustomLegend data={chartDatasets} />

                <ChartEsgRef chartRef="[GRI 302-1/11.1.2]"></ChartEsgRef>
            </div>
        </>
    );
}