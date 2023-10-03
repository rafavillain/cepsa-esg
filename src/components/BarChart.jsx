import { Bar } from "react-chartjs-2";

export default function BarChart({ chartData, chartOptions }) {
    return (
        <>
            <div className="App__chart-container">
                <Bar
                    data={chartData}
                    options={chartOptions} 
                />
            </div>
        </>
    );
}