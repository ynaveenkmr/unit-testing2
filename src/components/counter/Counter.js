import React, { useState } from 'react'

function Counter() {
    const [counter, setCounter] = useState(0)

    const delayCount = () => (
        setTimeout(() => {
          setCounter(counter + 1)
        }, 500)
      )

    return (
        <div>
            <h1>TODO's</h1>
            <label>Name</label>
            <h1 data-testid="counter">{ counter }</h1>
    <button data-testid="button-up" onClick={() => setCounter(counter + 1)}> Up</button>
    <button data-testid="button-up-delay" onClick={delayCount}> Delay</button>
    <button data-testid="button-down" onClick={() => setCounter(counter - 1)}>Down</button>
        </div>
    )
}

export default Counter