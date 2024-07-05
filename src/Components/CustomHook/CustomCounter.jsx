import React from 'react'
import useCounter from './useCounter'

function CustomCounter() {

    const [count,increment,decrement,reset] = useCounter(0,1)
  return (
      <div>
      <h1>Custom Counter:{count}</h1>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CustomCounter
