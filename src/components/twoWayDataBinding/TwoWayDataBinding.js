import React, { useState } from 'react'

function TwoWayDataBinding() {
    const [inputvalue, setInputValue] = useState('')

    const handleInput = (e) => {
        setInputValue(e.target.value)
    }

    return (
        <div>
            <h1>TODO's</h1>
            <label>Name</label>
            <input data-testid="id_inputvalue" type="text" value={inputvalue} onChange={handleInput}/>
            <div>{inputvalue}</div>
        </div>
    )
}

export default TwoWayDataBinding