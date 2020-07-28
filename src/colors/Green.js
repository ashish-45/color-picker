import React, { useState } from 'react';

const Green = () => {

    const [selectHex, setSelectHex] = useState(null);

    const colors = {
        color31: '#2ECC72',
        color32: '#26AE60',
        color33: '#6AB04A',
        color34: '#43BE31',
        color35: '#10A881',
        color36: '#019031',
        color37: '#75DA8B',
        color38: '#218F76',
        color39: '#218F76',
        color40: '#7CEC9F',
    };

    return (
        <div>
            <h1 className='g-color-title'>Green Color</h1>
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
    );
}

export default Green;
