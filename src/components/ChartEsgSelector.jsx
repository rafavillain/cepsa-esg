export default function ChartEsgSelector() {
    return (
        <div className="App__group-selector">
            <label htmlFor="group-selector">Tipo de derrame</label>
            <select id="group-selector">
                <option value="option-1">Derrame de petróleo</option>
                <option value="option-2">option 2</option>
                <option value="option-3">option 3</option>
            </select>
        </div>
    );
}