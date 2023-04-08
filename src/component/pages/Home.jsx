import React from 'react'
import Index from '../Blog/Index'
// import UserAuthContextApi, { UserAuthContext } from '../HOC/ContextAPI/UserAuthContextApi'

const Home = () => {
  return (
    // <UserAuthContextApi>
    //   <UserAuthContext.Consumer>
    //     {(content) => {
    //       console.log(content);
    //       return <Index />
    //     }}
    //   </UserAuthContext.Consumer>
    // </UserAuthContextApi>
    <div>
      <Index />
    </div>
  )
}

export default Home
