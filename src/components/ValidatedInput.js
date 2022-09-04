import React, { useState } from 'react'

const ValidatedInput = (props) => {
    const [error, setError] = useState("")

    const {
        value,
        setValue,
        label,
        errorMessage,
        hasError
    } = props

    const updateAndValidate = (e) => {
        setValue(e.target.value);
        if(hasError(e.target.value)) {
            setError(errorMessage);
        } else {
            setError("");
        }
    }
    return (
        <div>
            <label> {label} </label>
            <input type="text" value={value} onChange={updateAndValidate} />
            {
                error && value
                    ? <p> {error}</p>
                    : ""
            }
        </div>
    )
}

export default ValidatedInput