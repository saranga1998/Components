import React ,{useReducer} from 'react'

const initialCount = 0

const reduser = (state,action) =>{
    switch(action){
        case 'increment':
            return state + 1
        
        case 'decrement':
            return state -1
        
        case 'reset':
            return initialCount

        default:
            return state
    }
}

function ReduserCountThree() {

    const [count,dispatch] = useReducer(reduser,initialCount)
    const [countTwo,dispatchTwo] = useReducer(reduser,initialCount)
  return (
    <div>
        <div>
            <h1>{count}</h1>
            <button onClick={()=> dispatch('increment')}>Increment</button>
            <button onClick={()=> dispatch('decrement')}>Decrement</button>
            <button onClick={()=> dispatch('reset')}>Reset</button>
        </div>
        <div>
            <h1>{countTwo}</h1>
            <button onClick={()=> dispatchTwo('increment')}>Increment</button>
            <button onClick={()=> dispatchTwo('decrement')}>Decrement</button>
            <button onClick={()=> dispatchTwo('reset')}>Reset</button>
        </div>
    </div>
  )
}

export default ReduserCountThree
