import React,{useContext} from 'react'
import CompoF from './CompoF'
import { UserContext,RoleContext } from '../../App'

function CompoE() {

    const user = useContext(UserContext)
    const role = useContext(RoleContext)
    
  return (
    <div>
      {/* <CompoF/> */}
      User : {user} , Role : {role}
    </div>
  )
}

export default CompoE
