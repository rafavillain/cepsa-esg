import externalTooltipHandler from "./tooltip_config.jsx";

const BarConfig = {
  barThickness: 40,
  borderRadius: 10,
  maintainAspectRatio: false,
  hoverBorderWidth: 4,
  hoverBorderColor: 'rgba(38, 55, 70, 0.1)',
  scales: {
    y: {
      title: {
        display: true,
        text: 'Your Title'
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

export default BarConfig;