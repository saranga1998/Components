import React,{useContext} from 'react'
import { CountContext } from '../../App'

function ComponentA() {
    const countContext = useContext(CountContext)
  return (
    <div>
      <p>Component A - {countContext.countState}</p>
        <div>
            
            <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
            <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
        </div>
    </div>
  )
}

export default ComponentA
