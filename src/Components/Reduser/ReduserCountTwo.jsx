import React,{useReducer} from 'react'

const initialCounter ={
    firstcounter:0,
    secondcounter:10
}

const reduser =(state,action)=>{
    switch(action.type){
        case 'increment':
            return {...state,firstcounter:state.firstcounter+action.value}
        case 'decrement':
            return {...state,firstcounter:state.firstcounter-action.value}
        case 'increment2':
            return {...state,secondcounter:state.secondcounter+action.value}
        case 'decrement2':
            return {...state,secondcounter:state.secondcounter-action.value}
        case 'reset':
            return initialCounter
        default:
            return state       
    }
}

function ReduserCountTwo() {
    const [count,dispatch] = useReducer(reduser,initialCounter)
  return (
    <div>
        <h1>First:{count.firstcounter}</h1>
        <h1>Second:{count.secondcounter}</h1>
      <button onClick={()=>{dispatch({type:'increment',value:1})}}>Increment</button>
      <button onClick={()=>{dispatch({type:'decrement',value:1})}}>Decrement</button>
      <button onClick={()=>{dispatch({type:'increment',value:5})}}>Increment 5</button>
      <button onClick={()=>{dispatch({type:'decrement',value:5})}}>Decrement 5</button>

      <button onClick={()=>{dispatch({type:'increment2',value:1})}}>Increment second </button>
      <button onClick={()=>{dispatch({type:'decrement2',value:1})}}>Decrement second </button>
      <button onClick={()=>{dispatch({type:'reset'})}}>Reset</button>

    </div>
  )
}

export default ReduserCountTwo
