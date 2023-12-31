import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {FaMediumM} from 'react-icons/fa'
import { BsMoon } from "react-icons/bs";
import { BsMoonFill } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import{Link}  from 'react-router-dom'
import TextInput from './TextInput'
import CustomButton from './CustomButton'
import {useForm} from 'react-hook-form'
import { SetTheme } from '../redux/themeSlice';
import { Logout } from '../redux/userSlice';
function TopBar() {
     const{theme}=useSelector((state)=>state.theme)
     const {user}=useSelector((state)=>state.user)

     const dispatch=useDispatch() 
      const handleTheme=()=>{
        const themeValue = theme === "light" ? "dark" : "light";
        dispatch(SetTheme(themeValue));
      } 
 
     const {register,
        handleSubmit,
        formState:{errors}}=useForm()
     const handleSearch=async(data)=>{}
  return (
    <div  className='topbar w-full flex items-center justify-between py-3 md:py-6 px-4 bg-primary rounded-lg'>
        <Link to="*" className='flex gap-2 items-center'>
        <div  className='p-1 md:p-2 bg-[#065ad8] rounded-full text-white'>
<FaMediumM/>
        </div>
        <span  className='text-2xl text-[#065ad8] font-serif'>Minbook</span>
        </Link>
           <form className='hidden md:flex items-center justify-center'  onSubmit={handleSubmit(handleSearch)} >
           <TextInput 
            placegolder='Search...'
              styles='w-[18rem] lg:w-[38rem] py-3 rounded-l-full '
             register={register("search")}
           />
           <CustomButton 
           title='search'
           type='submit'
           containerStyles='bg-[#0444a4] text-white px-6 py-2.5 mt-2 rounded-r-full '
           />
           </form>

           {/*  incons */}

           <div  className='flex gap-4 items-center text-ascent-1 text-md md:text-xl'>

<button onClick={()=>handleTheme()}>{theme ?<BsMoon/> :<BsMoonFill/>}</button>

<div  className='hidden lg:flex'>
<IoMdNotifications/>
</div>

<div  >

<CustomButton 
           title='Log Out'
           onClick={()=>dispatch(Logout())}
           containerStyles=' text-sm px-4 md:px-6 text-ascent-1  py-1  rounded-full md:py-2 border border-[#666]'
           />
</div>
  </div>
    </div>
  )
}

export default TopBar