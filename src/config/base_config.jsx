import externalTooltipHandler from "./tooltip_config";

const chartConfig = (chartOptions) => {
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        borderRadius: 10,
        hoverBorderWidth: 4,
        hoverBorderColor: 'rgba(38, 55, 70, 0.1)',
        barThickness: 40,
        scale: {
            grid: {
                drawBorder: false
            }
        },
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
            legend: {
                display: false
            },
            tooltip: {
                enabled: false,
                position: 'nearest',
                external: externalTooltipHandler
            }
        }
    }

    return options;
};

export default chartConfig;