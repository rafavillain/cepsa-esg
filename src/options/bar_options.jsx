const barOptions = {
  barThickness: 40,
  borderRadius: 10,
  maintainAspectRatio: false,
  hoverBorderWidth: 4,
  hoverBorderColor: 'rgba(38, 55, 70, 0.1)',
  plugins: {
    legend: {
      display: false,
    }
  }
}

export default barOptions;


// const getOrCreateTooltip = (chart) => {
//   let tooltipEl = chart.canvas.parentNode.querySelector('div');

//   if (!tooltipEl) {
//       tooltipEl = document.createElement('div');
//       tooltipEl.style.background = '#fff';
//       tooltipEl.style.borderRadius = '4px';
//       tooltipEl.style.color = '#263746';
//       tooltipEl.style.opacity = 1;
//       tooltipEl.style.pointerEvents = 'none';
//       tooltipEl.style.position = 'absolute';
//       tooltipEl.style.transform = 'translate(-50%, 0)';
//       tooltipEl.style.transition = 'all .1s ease';

//       const table = document.createElement('table');
//       table.style.margin = '0px';

//       tooltipEl.appendChild(table);
//       chart.canvas.parentNode.appendChild(tooltipEl);
//   }

//   return tooltipEl;
// };

// const externalTooltipHandler = (context) => {
//   // Tooltip Element
//   const { chart, tooltip } = context;
//   const tooltipEl = getOrCreateTooltip(chart);

//   // Hide if no tooltip
//   if (tooltip.opacity === 0) {
//       tooltipEl.style.opacity = 0;
//       return;
//   }

//   // Set Text
//   if (tooltip.body) {
//       const titleLines = tooltip.title || [];
//       const bodyLines = tooltip.body.map(b => b.lines);

//       const tableHead = document.createElement('thead');

//       titleLines.forEach(title => {
//           const tr = document.createElement('tr');
//           tr.style.borderWidth = 0;

//           const th = document.createElement('th');
//           th.style.borderWidth = 0;
//           const text = document.createTextNode(title);

//           th.appendChild(text);
//           tr.appendChild(th);
//           tableHead.appendChild(tr);
//       });

//       const tableBody = document.createElement('tbody');
//       bodyLines.forEach((body, i) => {
//           const colors = tooltip.labelColors[i];

//           const span = document.createElement('span');
//           span.style.background = colors.backgroundColor;
//           span.style.borderColor = colors.borderColor;
//           span.style.borderWidth = '2px';
//           span.style.marginRight = '10px';
//           span.style.height = '10px';
//           span.style.width = '10px';
//           span.style.display = 'inline-block';

//           const tr = document.createElement('tr');
//           tr.style.backgroundColor = 'inherit';
//           tr.style.borderWidth = 0;

//           const td = document.createElement('td');
//           td.style.borderWidth = 0;

//           const text = document.createTextNode(body);

//           td.appendChild(span);
//           td.appendChild(text);
//           tr.appendChild(td);
//           tableBody.appendChild(tr);
//       });

//       const tableRoot = tooltipEl.querySelector('table');

//       // Remove old children
//       while (tableRoot.firstChild) {
//           tableRoot.firstChild.remove();
//       }

//       // Add new children
//       tableRoot.appendChild(tableHead);
//       tableRoot.appendChild(tableBody);
//   }

//   const { offsetLeft: positionX, offsetTop: positionY } = chart.canvas;

//   // Display, position, and set styles for font
//   tooltipEl.style.opacity = 1;
//   tooltipEl.style.left = positionX + tooltip.caretX + 'px';
//   tooltipEl.style.top = positionY + tooltip.caretY + 'px';
//   tooltipEl.style.font = tooltip.options.bodyFont.string;
//   tooltipEl.style.padding = tooltip.options.padding + 'px ' + tooltip.options.padding + 'px';
// };

// const barOptions = {
//   barThickness: 40,
//   borderRadius: 10,
//   maintainAspectRatio: false,
//   hoverBorderWidth: 4,
//   hoverBorderColor: 'rgba(38, 55, 70, 0.1)',
//   scales: {
//     y: {
//       title: 'asdasd'
//     }
//   },
//   interaction: {
//     mode: 'index',
//     intersect: false,
//   },
//   plugins: {
//     legend: {
//       display: false,
//     },
//     tooltip: {
//       enabled: false,
//       position: 'nearest',
//       external: externalTooltipHandler
//     }
//   }
// }

// export default barOptions;