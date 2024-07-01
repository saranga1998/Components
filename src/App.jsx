import React, { useReducer, useState } from 'react'
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
import ComponentA from './Components/UDandUC/ComponentA'
import ComponentB from './Components/UDandUC/ComponentB'
import ComponentD from './Components/UDandUC/ComponentD'
import DataFetchingOne from './Components/FDandUR/DataFetchingOne'
import DataFetchingTwo from './Components/FDandUR/DataFetchingTwo'
import ParentHook from './Components/CallbackHook/ParentHook'

export const UserContext = React.createContext()
export const RoleContext = React.createContext()
export const CountContext = React.createContext()

const initialCount = 0
const reduser = (state, action) => {

  switch (action) {

    case 'increment':
      return state + 1

    case 'decrement':
      return state - 1

    case 'reset':
      return initialCount

    default:
      return state

  }

}

function App() {

  const[count,dispatch] = useReducer(reduser,initialCount)

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
      {/* <ReduserCountTwo/>
      <ReduserCountThree/> */}
      {/* <CountContext.Provider value={{countState:count,countDispatch:dispatch}}>
        <h1>{count}</h1>
        <ComponentA/>
         <ComponentB/>
        <ComponentD/>
      </CountContext.Provider> */}

      {/* <DataFetchingOne/> */}
      {/* <DataFetchingTwo/> */}
      <ParentHook/>
    </div>
  )
}

export default App
