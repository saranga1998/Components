import React from 'react'
import useCounter from './useCounter'

function CustomCounterTwo() {
    const [count,increment,decrement,reset] = useCounter(10,10)
  return (
    <div>
      <div>
      <h1>Custom Counter Two:{count}</h1>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
    </div>
    </div>
  )
}

export default CustomCounterTwo
