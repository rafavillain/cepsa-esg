import React, { useState } from 'react';

export default function ChartEsgMainSelector({label, value, name, id, options, onChange}) {
    return (
        <>  
            <div className="chart-selector">
                {label && <label>{label}</label>}
                <select 
                    name={name}
                    id={id}
                    value={value}
                    onChange={onChange}
                >
                    {options && options.map((option) => (
                        <option key={option.id} value={option.id}>
                            {option.title}
                        </option>
                    ))}
                </select>
            </div>
        </>
    );
}
