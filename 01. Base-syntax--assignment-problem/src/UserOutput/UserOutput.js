import React from 'react'
import './UserOutput.css'

const userOutput = (props) => {
    return (
        <div className="UserOutput">
        <p>Username: {props.name}</p>
        <p>I hope I'll be overwritten.</p>
        </div>
    )
}

export default userOutput