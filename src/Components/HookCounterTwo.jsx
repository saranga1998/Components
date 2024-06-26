import React, { useState } from 'react'

function HookCounterTwo() {
    const initailCount = 0
    const [count,setCount] = useState(initailCount)

    const incrementCountFive = () => {
        for(let i=0 ; i<5;i++){
          setCount(prevCouunt => prevCouunt +1)
        }
      }

  return (
    <div>
      Count : {count}
      <button onClick={()=>setCount(initailCount)}>Reset</button>
      <button onClick={()=>setCount(prevCouunt => prevCouunt +1)}>Increment</button>
      <button onClick={()=>setCount(prevCouunt => prevCouunt -1)}>Decrement</button>
      <button onClick={incrementCountFive}>Five</button>
    </div>
  )
}

export default HookCounterTwo
