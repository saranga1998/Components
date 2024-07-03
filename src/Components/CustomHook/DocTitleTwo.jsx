import React,{useState} from 'react'
import useDocTitle from './useDocTitle'

function DocTitleTwo() {
    const [count,setCount] = useState(0)

    useDocTitle(count)
  return (
    <div>
      <h1>DocTitle Two Count- {count}</h1>
      <button onClick={()=>setCount(count+1)}>Add</button>
    </div>
  )
}

export default DocTitleTwo
