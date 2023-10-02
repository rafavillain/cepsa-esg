// import CommonOptions from "../options/common_options";

import BarChart from "./BarChart";
import BarOptions from "../options/bar_options";

import LineChart from "./LineChart";
import LineOptions from "../options/line_options";

import PieChart from "./PieChart";
import PieOptions from "../options/pie_options";

import DoughnutChart from "./DoughnutChart";
import DoughnutOptions from "../options/doughnut_options";

export default function ChartEsg({ chart }) {
    const chartType = chart.type;
    const chartTitle = chart.title;
    const chartSubtitle = chart.subtitle;
    const chartData = chart.chartData ? chart.chartData[0] : null;
    const chartDatasets = chartData ? chartData.datasets : null;


    const renderChartOnSelection = () => {
        switch (chartType) {
            case "bar":
                return <BarChart chartTitle={chartTitle} chartSubitle={chartSubtitle} chartData={chartData} chartOptions={BarOptions} chartDatasets={chartDatasets} />;
            case "line":
                return <LineChart chartTitle={chartTitle} chartSubitle={chartSubtitle} chartData={chartData} chartOptions={LineOptions} chartDatasets={chartDatasets} />;
            case "pie":
                return <PieChart chartTitle={chartTitle} chartSubitle={chartSubtitle} chartData={chartData} chartOptions={PieOptions} chartDatasets={chartDatasets} />;
            case "doughnut":
                return <DoughnutChart chartTitle={chartTitle} chartSubitle={chartSubtitle} chartData={chartData} chartOptions={DoughnutOptions} chartDatasets={chartDatasets} />;
            default:
                return null;
        }
    };

    return (
        <>
            <div className="App__main" data-print>
                {renderChartOnSelection()}
            </div>
        </>
    );
}
