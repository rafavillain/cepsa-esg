import { Bar } from "react-chartjs-2";
import externalTooltipHandler from "../config/tooltip_config"

export default function BarChart({ chartData, chartOptions }) {
    // Base options. Add custom options depending on chart data from charts_data.json (for example: chartOptions.scales.y.title.text)
    const options = {
        barThickness: 40,
        borderRadius: 10,
        maintainAspectRatio: false,
        hoverBorderWidth: 4,
        hoverBorderColor: 'rgba(38, 55, 70, 0.1)',
        scales: {
            'left-y-axis': {
                display: chartOptions != undefined && chartOptions.scales.y.left ? true : false,
                type: 'linear',
                position: 'left',
                title: {
                    display: chartOptions != undefined ? true : false,
                    text: chartOptions != undefined && chartOptions.scales.y.left != undefined ? chartOptions.scales.y.left.title : '',
                    padding: 16
                }
            },
            'right-y-axis': {
                display: chartOptions != undefined && chartOptions.scales.y.right ? true : false,
                type: 'linear',
                position: 'right',
                title: {
                    display: chartOptions != undefined ? true : false,
                    text: chartOptions != undefined && chartOptions.scales.y.right != undefined ? chartOptions.scales.y.right.title : '',
                    padding: 16
                }
            }
        },
        interaction: {
            mode: 'index',
            intersect: false,
        },
        plugins: {
            tooltip: {
                enabled: false,
                position: 'nearest',
                external: externalTooltipHandler
            }
        }
    }
    return (
        <>
            <div className="App__chart-container">
                <Bar
                    data={chartData}
                    options={options}
                />
            </div>
        </>
    );
}