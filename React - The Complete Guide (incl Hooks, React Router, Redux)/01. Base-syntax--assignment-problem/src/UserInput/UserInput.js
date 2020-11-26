import React from 'react'

const userInput = (props) => {
    //inline style//
    const initialStyle = {
        border: '2px solid blue',
        padding: '11px',
        margin: '30px'
    }
    return  <input
    type="text" 
    style={initialStyle}
    onChange={props.changed} 
    value={props.currentName} />
}

export default userInput