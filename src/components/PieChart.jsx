import { Pie } from "react-chartjs-2";
import chartConfig from "../config/base_config"

export default function PieChart({ chartData, chartOptions }) {
    // base and common config
    const baseOptions = chartConfig(chartOptions);
    // custom config, where we can add or rewrite base options
    const customOptions = {}
    const currentChartOptions = Object.assign(baseOptions, customOptions);

    return (
        <>
            <div className="App__chart-container">
                <Pie
                    data={chartData}
                    options={currentChartOptions}
                />
            </div>
        </>
    );
}