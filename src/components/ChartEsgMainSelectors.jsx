import React, { useState, useEffect } from 'react';
import ChartEsgMainSelector from "./ChartEsgMainSelector";

export default function ChartEsgMainSelectors({ data, setSelector3 }) {
    const dataCharts = data.charts;

    const [selector1Value, setSelector1Value] = useState(dataCharts[0]);
    const [selector2Value, setSelector2Value] = useState(dataCharts[0].elements_lvl2[0]);
    const [selector3Value, setSelector3Value] = useState(dataCharts[0].elements_lvl2[0].elements_lvl3[0]);

    const optionsSelector1 = dataCharts;
    const [optionsSelector2, setOptionsSelector2] = useState(dataCharts[0].elements_lvl2);
    const [optionsSelector3, setOptionsSelector3] = useState(dataCharts[0].elements_lvl2[0].elements_lvl3);

    useEffect(() => {
        setSelector3(selector3Value);
    }, [selector3Value]);


    const handleChangeSelector1 = (e) => {
        const index = e.target.selectedIndex
        const lvl2 = dataCharts[index].elements_lvl2
        // set itself value on change it
        setSelector1Value(e.target.value)
        // reset second selector value to first option
        setSelector2Value(lvl2[0])
        // set options of second selector
        setOptionsSelector2(lvl2)
        // reset third selector value to first option
        setSelector3Value(lvl2[0].elements_lvl3[0])
        // set options of third selector
        setOptionsSelector3(lvl2[0].elements_lvl3)
    }

    const handleChangeSelector2 = (e) => {
        const index = selector2.selectedIndex
        const lvl3 = optionsSelector2[index].elements_lvl3
        // set itself value on change it
        setSelector2Value(e.target.value)
        // reset third selector value to first option
        setSelector3Value(lvl3[0])
        // set options of third selector
        setOptionsSelector3(lvl3)
    }

    const handleChangeSelector3 = (e) => {
        const index = e.target.selectedIndex
        // set itself value on change it
        setSelector3Value(optionsSelector3[index])
    }


    return (
        <>
            <div className='App__main-selectors'>
                <ChartEsgMainSelector
                    value={selector1Value.id}
                    name="name 1"
                    id="selector1"
                    options={optionsSelector1}
                    onChange={handleChangeSelector1}
                />

                <ChartEsgMainSelector
                    value={selector2Value.id}
                    name="name 2"
                    id="selector2"
                    options={optionsSelector2}
                    onChange={(e) => handleChangeSelector2(e)}
                />

                <ChartEsgMainSelector
                    value={selector3Value.id}
                    name="name 3"
                    id="selector3"
                    options={optionsSelector3}
                    onChange={(e) => handleChangeSelector3(e)}
                />
            </div>
        </>
    )
}