export default function ChartEsgLegend({ data }) {
    return (
        <div className="custom-legend">
            {data.map((item, index) => (
                <div key={index} className="custom-legend__item">
                    <span
                        className="custom-legend__color"
                        style={{ backgroundColor: item.backgroundColor }}
                    ></span>
                    <span className="custom-legend__label">{item.label}</span>
                </div>
            ))}
        </div>
    );
};