export default function ChartEsgRef({ chartRef }) {
    return (
        <div className="ref">
            {chartRef && chartRef.map((ref, index) => (
                <p key={ref.text + index}>{ref.text}</p>
            ))}
        </div>
    );
}