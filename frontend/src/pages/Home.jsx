import React from 'react'
import {useSelector}  from 'react-redux'
function Home() {

  const {user}=useSelector((state)=>state.user)
  return (
    <div  className='home w-full px-0 lg:px-10 2xl:px-40 bg-bgColor lg:rounded-lg h:screen overflow-hidden '>

<h1>Home</h1>

    </div>
  )
}

export default Home