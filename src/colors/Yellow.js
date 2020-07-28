import React, { useState } from 'react'

const Yellow = () => {

    const [selectHex, setSelectHex] = useState(null);

    const colors = {
        color1: '#EEC213',
        color2: '#DFAF2B',
        color3: '#F4C724',
        color4: '#FAC42F',
        color5: '#E1DA00',
        color6: '#FAD02E',
        color7: '#F3B63E',
        color8: '#F3B431',
        color9: '#F3B63A',
        color10: '#F5C469',

    }

    return (
        <div>
            <h1 className='y-color-title'>Yellow Color</h1>
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
export default Yellow;