import {useState} from 'react'

function useCounter(startCount =0,value) {
    const [count,setCount] = useState(startCount)

    const increment = ()=>{
        setCount(prevCount => prevCount +value)
    }

    const decrement = () =>{
        setCount(prevCount => prevCount -value)
    }

    const reset =()=>{
        setCount(startCount)
    }

    return [count,increment,decrement,reset]
}

export default useCounter
