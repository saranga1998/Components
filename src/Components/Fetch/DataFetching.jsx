import React,{useState,useEffect} from 'react'
import axios from 'axios'

function DataFetching() {

    const [post,setPost] =useState({})
    const [id,setId] = useState(1)
    const [idFromBtnClick,setIdformBtnClick] = useState(1)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromBtnClick}`)
        .then(res=>{
            console.log(res)
            setPost(res.data)
        
        })
        .catch(err =>{
            console.log(err)
        })
    },[idFromBtnClick])


  return (
    <div>
    <input type='text' value={id} onChange={e => setId(e.target.value)}></input>
    <button type='button' onClick={()=>setIdformBtnClick(id)}>Fetch Post</button>
        <div>{post.title}</div>
      {/* <ul>
        {
            post.map(post=>(
                <li key={post.id}>{post.title}</li>
            ))
        }
      </ul> */}
    </div>
  )
}

export default DataFetching
