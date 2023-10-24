import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";

import ChartMainSelectors from "./components/ChartEsgMainSelectors";
import TestChartEsg from "./components/TestChartEsg";
import ChartEsg from "./components/ChartEsg";

import charts_data from "./data/charts_data";
import test_charts_data from "./data/test_charts_data";

import { CategoryScale } from "chart.js";

Chart.register(CategoryScale);

export default function App() {
    const data = charts_data;
    const test_data = test_charts_data;
    const [chart, setSelector] = useState(charts_data);

    return (
        <div className="App">

            {/* <ChartMainSelectors
                data={data} 
                setSelector3={setSelector}
            /> */}

            <TestChartEsg
                data={test_data} 
            />
            
            {/* <ChartMainSelectors
                data={data} 
                setSelector3={setSelector}
            />

            <ChartEsg 
                chart={chart}
            /> */}
        </div>
    );
}