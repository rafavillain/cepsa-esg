import React, { useState, ChangeEvent } from 'react';

interface MyComponentState {
  selectedValue: string;
}

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export const optionsBar = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

export const optionsLine = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const dataBar = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: 'rgba(255, 99, 132, 0.5)'
    },
    {
      label: 'Dataset 2',
      data: [1, 9, 20, 61, 16, 5, 12],
      backgroundColor: 'rgba(50, 50, 50, 0.5)'
    },
  ],
};

export const dataLine = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [65, 59, 80, 81, 56, 55, 40],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [1, 9, 20, 61, 16, 5, 12],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ]
};

const App: React.FC = () => {
  const [state, setState] = useState<MyComponentState>({ selectedValue: '' });

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setState({ selectedValue: event.target.value });
  };

  return (
    <div>
      <select value={state.selectedValue} onChange={handleSelectChange}>
        <option value="">Seleccionar gráfica</option>
        <option value="chart-line">Línea</option>
        <option value="chart-bar">Barras</option>
      </select>
      {state.selectedValue === 'chart-line' && <Line options={optionsLine} data={dataLine} />}
      {state.selectedValue === 'chart-bar' && <Bar options={optionsBar} data={dataBar} />}
    </div>
  );
};

export default App;
