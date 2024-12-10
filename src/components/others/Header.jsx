import React, { useState } from 'react';

const Header = (props) => {

  const [username, setUsername] = useState('')

  //if(!data){
  //  setUsername()
  //}else{
  //  setUsername(data.firstName)
  //}

  const logoutUser = () =>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    //window.location.reload()
  }

  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium text-white'>Hello <br/><span className='text-3xl font-semibold'>Username👋</span></h1>
        <button onClick={logoutUser} className='bg-red-500 text-lg font-medium text-white px-5 rounded-sm py-2'>Log Out</button>
    </div>
  )
}

export default Header;