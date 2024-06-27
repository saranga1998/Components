import React,{useState,useEffect} from 'react'

function UFhookCounter() {
    const [count,setCount] = useState(0);
    const [name,setName] = useState('');


    useEffect(()=>{
      console.log("useEffect -Updateing document title")
        document.title =`You Clicked ${count} times`
    },[count])



  return (
    <div>
      <input type='text'value={name} onChange={e=>setName(e.target.value)}></input>
      <button onClick={() => setCount( count + 1 ) }>Click {count} times</button>
    </div>
  )
}

export default UFhookCounter
