import React, { useState } from 'react'

const Blue = () => {

    const [selectHex, setSelectHex] = useState(null)

    const colors = {
        color11: '#4834DF',
        color12: '#0A79DF',
        color13: '#2475B0',
        color14: '#3498DB',
        color15: '#0ABDE3',
        color16: '#192A56',
        color17: '#3C40C6',
        color18: '#6A89CC',
        color19: '#4BCFFA',
        color20: '#74B9FF',

    }

    return (
        <div>
            <h1 className='b-color-title'>Blue Color</h1>
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

export default Blue;