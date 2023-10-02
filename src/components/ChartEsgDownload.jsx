import React, { useState } from "react";

export default function ChartEsgDownload({ chartDownloadImage, chartDownloadPdf }) {
    const [state, setState] = useState(false);

    const handleClickDownloadDropdown = () => {
        setState(!state)
    }

    const dropdownVisible = state ? 'download-chart__dropdown' : 'download-chart__dropdown--hidden'

    return (
        <>
            <div className="download-chart">
                <button className="download-chart__trigger" type="button" onClick={handleClickDownloadDropdown}>
                    Descargar
                </button>
                <div className={dropdownVisible}>
                    <button className="download-chart__btn" type="button" onClick={chartDownloadPdf}>PDF</button>
                    {/* <button className="download-chart__btn" type="button" onClick={chartDownloadExcel}>Excel</button> */}
                    <button className="download-chart__btn" type="button" onClick={chartDownloadImage}>Imagen</button>
                </div>
            </div>
        </>
    );
}