import { Doughnut } from "react-chartjs-2";
import ChartEsgMainSelector from "./ChartEsgMainSelector";
import { useState } from "react";

export default function DoughnutChart({ chartData, chartOptions }) {
    const [selector4Value, setSelector4Value] = useState('');

    const handleChangeSelector4 = (e) => {
        setSelector4Value(e.target.value)
    }

    return (
        <>
            {chartData.elements_lvl4 && 
                <ChartEsgMainSelector
                    value={selector4Value.id}
                    name="name 4"
                    id="selector4"
                    options={chartData.elements_lvl4[0]}
                    onChange={handleChangeSelector4}
                />
            }

            <div className="App__chart-container">
                <Doughnut
                    data={chartData}
                    options={chartOptions} 
                />
            </div>
        </>
    );
}