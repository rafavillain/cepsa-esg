import { Scatter } from "react-chartjs-2";
import externalTooltipHandler from "../config/tooltip_config"

export default function ScatterChart({ chartData, chartOptions }) {
    // Base options. Add custom options depending on chart data from charts_data.json (for example: chartOptions.scales.y.title.text)
    const options = {
        barThickness: 40,
        borderRadius: 10,
        maintainAspectRatio: false,
        hoverBorderWidth: 4,
        hoverBorderColor: 'rgba(38, 55, 70, 0.1)',
        scales: {
            y: {
                title: {
                    display: chartOptions != undefined ? true : false,
                    text: chartOptions != undefined ? chartOptions.scales.y.title.text : '',
                    padding: 8
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
                <Scatter
                    data={chartData}
                    options={options}
                />
            </div>
        </>
    );
}