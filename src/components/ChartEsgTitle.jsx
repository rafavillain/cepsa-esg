export default function ChartEsgTitle({ title, subtitle }) {
    return (
        <>
            <div className="App__intro-text">
                <h1 className="App__title">{title}</h1>
                <h2 className="App__subtitle">{subtitle}</h2>
            </div>
        </>
    );
}