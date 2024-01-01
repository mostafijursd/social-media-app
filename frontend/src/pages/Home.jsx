import React, { useState } from 'react'
import {useSelector}  from 'react-redux'
import { TopBar, ProfileCard,FriendsCard, CustomButton, TextInput } from '../components'
import { Link } from 'react-router-dom'
import { friends, requests, suggest } from '../assets/data'
import { NoProfile } from '../assets'
import { BsPersonFillAdd } from "react-icons/bs"
import {useForm} from 'react-hook-form'


function Home() {
  const {user}=useSelector((state)=>state.user);
  const [friendRequest,setFriendRequest]=useState(requests);
  const[suggestedFriends,setSuggestedFriends]=useState(suggest);
  const [errMsg,setErrMsg]=useState("")
 const {register,
  handleSubmit,
  formState:{errors}}=useForm();
 const handlePostSubmit=async(data)=>{}
  return (
    <div  className='home w-full px-0 lg:px-10 2xl:px-40 bg-bgColor lg:rounded-lg h-screen overflow-hidden   '>
<TopBar/>
<div className='w-full flex gap-2 lg:gap-4 pt-5 pb-10 h-full'>
{/*  left */}
<div  className='hidden w-1/3 lg:w-1/4 h-full md:flex flex-col gap-6 overflow-y-auto'>

  <ProfileCard  user={user  }/> 
  <FriendsCard friends={user?.friends}/>
</div>
{/* center */}
<div  className='flex-1 h-full bg-primary px-4 flex flex-col gap-6 overflow-y-auto rounded-lg'>
 <form  className='bg-primary px-4 rounded-lg'  onSubmit={()=>handleSubmit(handlePostSubmit)}>
<div className='w-full flex items-center gap-2 py-4 border-b border-[#66666645]'>
<img src={user?.profileUrl?? NoProfile} alt="User Image" className='w-14 h-14 rounded-full object-cover'  />
<TextInput   styles=' w-full rounded-full py-4 '  placegolder=" What's on your mind...."
             name="description"
             register={register("description",{
              required:"Write something about post"
             })}

             error={errors.description?errors.description.message:""}

/>
</div>
{
  errMsg?.message &&(
    <span
     role='alert'
     className={`text-sm ${
      errMsg?.status==="failed"
      ? "text-[#f64949fe]"
      : "text-[#2ba150fe]"
     } mt-0.5`}
     >{errMsg?.message}

    </span>
  )}

  <div>
    
  </div>
 </form>

</div>
{/* right*/}
<div  className='hidden w-1/4 h-full lg:flex flex-col gap-8 overflow-y-auto'>
{/* firend request */}
<div  className='w-full bg-primary shadow-sm rounded-lg px-6 py-5'>
<div  className='flex items-center justify-between text-xl text-ascent-1 pb-2 border-b border-[#66666645]'>
<span>Friends Request</span>
<span>{friendRequest?.length}</span>
</div>
<div  className='w-full flex flex-col gap-4 pt-4'>
{
  friendRequest?.map(({_id,requestFrom:from})=>(
    <div  key={_id}  className='flex items-center justify-between '>


        <Link to={"./profile/" + from._id} className='w-full flex gap-4 items-center  cursor-pointer'  >
          <img src={from?.profileUrl ?? NoProfile} alt={from?.firstName} className='w-10 h-10 object-cover rounded-full'  />

           <div className='flex-1 '>
<p  className='text-base font-medium text-ascent-1'>{from?.firstName} {from?.lastName}</p>
<span  className='text-sm text-ascent-2 '>{from?.profession ?? "No profession"}</span>
           </div>

        </Link>


          <div className='flex gap-1'>
<CustomButton title='Accept'
 containerStyles='bg-[#0444a4] text-xs text-white px-1.5 py-1 rounded-full' />
 <CustomButton title='Deny'
 containerStyles= ' border border-[#666] text-xs text-ascent-1 px-1.5 py-1 rounded-full' />
          </div>
    </div>
  ))
}
</div>
</div>
{/* suggested friends */}
<div className='w-full bg-primary shadow-sm rounded-lg px-5 py-5'>
<div className='flex items-center justify-between text-lg text-ascent-2 border-b border-[#66666645]'>
<span>Friends Suggestion</span>
</div>
  <div className='w-full flex flex-col gap-4 pt-4'>
{
   suggestedFriends?.map((friend)=>(
    <div className='flex items-center justify-between' key={friend._id}>
 <Link  to={"/profile/" + friend?._id} key={friend._id} className='w-full flex gap-4 items-center  cursor-pointer'>
<img src={friend?.profileUrl ?? NoProfile} alt={friend?.firstName} className='w-10 h-10 object-cover rounded-full'/>
<div className='flex-1 '>
<p  className='text-base font-medium text-ascent-1'>{friend?.firstName} {friend?.lastName}</p>
<span  className='text-sm text-ascent-2 '>{friend?.profession ?? "No profession"}</span>
           </div>
 </Link>
<div  className='flex gap-1'>
 <button  className='bg-[#0444a430] text-sm text-white p-1 rounded'  onClick={()=>{}}>
<BsPersonFillAdd   size={20} className='text-[#0f52b6]'/>

 </button>
</div>

    </div>
   ))
}
  </div>

</div>
</div>
</div>
    </div>
  )
}
 
export default Home