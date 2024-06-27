import React,{useState,useEffect} from 'react'

function IntarvalHookCounter() {
    const [count,setCount] = useState(0)

    const tick = () =>{
        setCount(prevCount => prevCount +1)
    }

    useEffect(()=>{
        const intarval =setInterval(tick,1000)

        return()=>{
            clearInterval(intarval)
        }
    },[])


  return (
    <div>
      {count}
    </div>
  )
}

export default IntarvalHookCounter
