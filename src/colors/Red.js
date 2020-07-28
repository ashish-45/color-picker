import React, { useState } from 'react';

const Red = () => {

    const [selectHex, setSelectHex] = useState(null)

    const colors = {
        color21: '#FF3031',
        color22: '#E84342',
        color23: '#E44236',
        color24: '#D63031',
        color25: '#EC4849',
        color26: '#EA425C',
        color27: '#E8290B',
        color28: '#AE1438',
        color29: '#FF4848',
        color30: '#FF362E',
    }

    return (
        <div>
            <h1 className='r-color-title'>Red Color</h1>
            <div className='container-fluid'>
                {Object.entries(colors).map(([id, color]) =>
                    <div className='div-style' id={id} onClick={() => {
                        navigator.clipboard.writeText(color)
                        setSelectHex(color)
                    }}>
                        {color === selectHex ? "Copied" : color}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Red;
