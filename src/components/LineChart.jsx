import { Line } from "react-chartjs-2";

export default function LineChart({chartData, chartOptions }) {
    return (
        <>
            <div className="App__chart-container">
                <Line
                    data={chartData}
                    options={chartOptions} 
                />
            </div>
        </>
    );
}