import React from 'react'

const Validation = (props) => {
    let validationMessage = <p>The text is long enough!</p>

    if (props.inputLength <= 5) {
        validationMessage = <p>The text is too short!</p>
    }

    return (
        <div>
            {validationMessage}
        </div>
    )
}

export default Validation