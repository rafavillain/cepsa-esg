export const chartBaseConfig = (Chart) => {
    Chart.defaults.responsive = true
    Chart.defaults.maintainAspectRatio = false
    Chart.defaults.scale.grid.drawBorder = false
    Chart.defaults.plugins.legend.display = false
    Chart.defaults.plugins.legend.tooltip = { enabled: false }
    Chart.defaults.plugins.legend.tooltip.position = 'nearest'
    Chart.defaults.backgroundColor = '#ff0000'

    console.log(Chart.defaults);
}


export default chartBaseConfig;