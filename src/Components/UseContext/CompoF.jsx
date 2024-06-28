import React from 'react'
import { UserContext ,RoleContext} from '../../App'



function CompoF() {
  return (
    <div>
      
      <UserContext.Consumer>
        {
            user =>{
                return(
                    <RoleContext.Consumer>
                        {
                            role =>{
                                return <div>User name {user}.Role{role}</div>
                            }
                        }
                    </RoleContext.Consumer>
                )
            }
        } 
      </UserContext.Consumer>
    </div>
  )
}

export default CompoF
