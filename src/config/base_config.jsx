import externalTooltipHandler from "./tooltip_config";

const chartConfig = (chartOptions) => {
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        borderRadius: 4,
        hoverBorderWidth: 4,
        hoverBorderColor: 'rgba(38, 55, 70, 0.1)',
        barThickness: 40,
        scale: {
            grid: {
                drawBorder: false
            }
        },
        scales: {
            // x: {
            //     display: chartOptions != undefined && chartOptions.scales.y.left ? true : false,
            //   },
            //   y: {
            //     display: true,
            //     type: 'logarithmic',
            //   },
            'left-y-axis': {
                display: chartOptions != undefined && chartOptions.scales.y.left ? true : false,
                type: chartOptions != undefined && chartOptions.scales.y.type ? chartOptions.scales.y.type : 'linear',
                position: 'left',
                title: {
                    display: chartOptions != undefined ? true : false,
                    text: chartOptions != undefined && chartOptions.scales.y.left != undefined ? chartOptions.scales.y.left.title : '',
                    padding: 16
                }
            },
            'right-y-axis': {
                display: chartOptions != undefined && chartOptions.scales.y.right ? true : false,
                type: chartOptions != undefined && chartOptions.scales.y.type ? chartOptions.scales.y.type : 'linear',
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