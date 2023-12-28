import React, { useState } from 'react'
import {FaMediumM} from 'react-icons/fa'
import{useDispatch}  from 'react-redux'
import {TextInput,Loading,CustomButton} from '../components'
import { FaShareAlt } from "react-icons/fa"
import { ImConnection } from "react-icons/im"
import { AiOutlineInteraction } from "react-icons/ai";
import {Link} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import { RegImg } from '../assets'
function Register() {
  const {
register,
handleSubmit,
getValues,
formState:{errors},
  }=useForm(
  {  mode:"onChange",
  });

const onSubmit=async(data)=>{
  
}

  const[errMsg,setErrMsg]=useState("");
  const[isSubmitting,setIsSubmitting]=useState(false);
  const dispatch=useDispatch()
  return (
    <div  className=' bg-bgColor w-full h-[100vh] flex items-center justify-center p-6'>

<div className='w-full md:w-2/3 h-fit lg:h-full 2xl:h-5/6 py-8 lg:py-0 flex flex-row-reverse bg-primary rounded-xl overflow-hidden shadow-xl'>

  {/* lift */}
 <div className='w-full lg:w-1/2 h-full p-10 2xl:px-20 flex flex-col justify-center'>

<div className='w-full flex gap-2 items-center mb-6'>
  <div  className='p-2 bg-[#065ad8] rounded-full text-white '>
  <FaMediumM />
  </div>
  <span  className='text-2xl text-[#065ad8] font-serif'>Minbook</span>
</div>
<p className='text-ascent-1 text-base font-semibold'> Create your account</p>
 
 <form className='py-8 flex flex-col gap-5'  onSubmit={handleSubmit(onSubmit)}>

<div  className='w-full flex flex-col lg:flex-row gap-1 md:gap-2'>



<TextInput  
   name="FirstName"
   placegolder="First Name"
   lebal="FirstName"
   type="FirstName"
   register={
    register("FirstName",{
      required:"First Name is required "
    })}
    styles='w-full '
    
    error={errors.FirstName ? errors.FirstName.message :""}
  />

 <TextInput  
   name="LastName"
   placegolder="last Name"
   lebal="last Name"
   type="lastName"
   register={
    register("lastName",{
      required:" last Name is required "
    })}
    styles='w-full '
    
    error={errors.lastName ? errors.lastName.message :""}
  />
</div>
  <TextInput  
   name="email"
   placegolder="email@example.com"
   lebal="Email Address"
   type="email"
   register={
    register("email",{
      required:"Email Address is required "
    })}
    styles='w-full '
    
    error={errors.email ? errors.email.message :""}
  />
   <TextInput  
   name="password"
   lebal="password"
   placegolder="password"
   type="password"
   register={
    register("password",{
      required:"password is required "
    })}
    styles='w-full rounder-full'
    lebalStyles='ml-2'
    error={errors.email ? errors.password?.message :""}
  />
  <TextInput  
   name="Confirm Password"
   lebal="password"
   placegolder="Confirm Password"
   type="password"
   register={
    register("cPassword",{
       validate:(value)=>{
        const {password}=getValues();
        if(password != value){
return "password do no match";
        }
       }
    })}
    styles='w-full '
    
    error={errors.cPassword && errors.cPassword.type=== "validate" ? errors.cPassword?.message : ""}
  />
  
  {
    errMsg?.message && (
      <span className={` text-sm ${
errMsg?.status =="failed" ? "text-[#f64949fe]" :"text-[#2ba150fe]"
      }  mt-0.5` }>
        {errMsg?.message}
      </span>) }


      {

        isSubmitting ?  (<Loading />) : (<CustomButton 
          type='submit' 
          containerStyles={`inline-flex justify-center rounder-md bg-blue hover:bg-[#002D62]  px-8 py-3
          text-sm font-medium text-white outline-none`}
          title='Create Account'/>
      )
      } 
 </form>

 <p  className='text-ascent-2 text-sm text-center'>
  Already has  account? {" "}

  <Link  to="/login"  className='text-[#065ad8] font-semibold ml-2 cursor-pointer'>
  Login
  </Link>
 </p>
 
 </div>

  {/* rigth */}

<div  className='hidden w-1/2 h-full lg:flex flex-col items-center justify-center bg-blue'>
<div  className='relative w-full flex items-center justify-center'>

<img src={RegImg}  className='w-48 2xl:w-64 h-48 2xl:h-64 rounded-full object-cover' />

<div className='absolute flex items-center gap-1 bg-white right-10 top-10 py-2 px-5 rounded-full'>
<FaShareAlt  size={14}/>
<span  className='text-xs font-medium'>Share</span>
</div>
<div className='absolute flex items-center gap-1 bg-white left-10 top-10 py-2 px-5 rounded-full'>
<ImConnection  size={14}/>
<span  className='text-xs font-medium'>Connect</span>
</div>
<div className='absolute flex items-center gap-1 bg-white left-12  py-2 px-5 bottom-6 rounded-full'>
<AiOutlineInteraction  size={14}/>
<span  className='text-xs font-medium'>Interact</span>
</div>

</div>
<div  className='mt-16 text-white'>
<p className='text-white text-base'>Conncet with friends & have share for fun</p>
<span className='text-sm text-white/80'>Sgare mempries friends and the world</span>
</div>
</div>
</div>
 </div>
  )
}

export default Register