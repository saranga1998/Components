import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PostList from './Components/PostList'
import PostForm from './Components/PostForm'
import ClassCounter from './Components/ClassCounter'
import HookCounter from './Components/HookCounter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <PostList/> */}
      {/* <PostForm/> */}
      {/* <ClassCounter/> */}
      <HookCounter/>
    </div>
  )
}

export default App
