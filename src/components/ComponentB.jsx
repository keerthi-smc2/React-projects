import React from 'react'
import { UserContext } from '../pages/Hooks'

function ComponentB() {
  return (
    <div>
        <UserContext.Consumer>
            {
                user => {
                    
                    return <div>User Context value {user}</div>
                }
            }
        </UserContext.Consumer>
    </div>
  )
}

export default ComponentB