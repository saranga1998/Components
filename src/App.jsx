import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PostList from './Components/PostList'
import PostForm from './Components/PostForm'
import ClassCounter from './Components/ClassCounter'
import HookCounter from './Components/HookCounter'
import HookCounterTwo from './Components/HookCounterTwo'
import HookCounterThere from './Components/HookCounterThere'
import HookCounterFour from './Components/HookCounterFour'
import UFhookCounter from './Components/UseEffect/UFhookCounter'
import HookMouse from './Components/UseEffect/HookMouse'
import MouseContainer from './Components/UseEffect/MouseContainer'
import IntarvalHookCounter from './Components/UseEffect/IntarvalHookCounter'
import DataFetching from './Components/Fetch/DataFetching'
import CompoC from './Components/UseContext/CompoC'
import ReduserCount from './Components/Reduser/ReduserCount'
import ReduserCountTwo from './Components/Reduser/ReduserCountTwo'
import ReduserCountThree from './Components/Reduser/ReduserCountThree'

export const UserContext = React.createContext()
export const RoleContext = React.createContext()

function App() {
  
  return (
    <div>
      {/* <PostList/> */}
      {/* <PostForm/> */}
      {/* <ClassCounter/> */}
      {/* <HookCounter/> */}
      {/* <HookCounterTwo/> */}
      {/* <HookCounterThere/> */}
      {/* <HookCounterFour/> */}
      {/* <UFhookCounter/> */}
      {/* <HookMouse/> */}
      {/* <MouseContainer/> */}
      {/* <IntarvalHookCounter/> */}
      {/* <DataFetching/> */}

      {/* <UserContext.Provider value={'Saranga'}>
        <RoleContext.Provider value={'Developer'}>
          <CompoC/>
        </RoleContext.Provider>
        
      </UserContext.Provider> */}

      {/* <ReduserCount/> */}
      <ReduserCountTwo/>
      <ReduserCountThree/>
    </div>
  )
}

export default App
