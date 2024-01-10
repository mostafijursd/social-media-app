import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useForm} from 'react-hook-form'
import { MdClose } from "react-icons/md";
import {CustomButton, Loading, TextInput} from '../components'
import { UpdataProfile } from '../redux/userSlice';
function EditProfile() {
    const {user}=useSelector((state=>state.user));
    const dispatch=useDispatch();
    const [errMsg,setErrMsg]=useState("");
    const[isSubmiting,setIsSubmiting]=useState(false);
    const[picture,setPicture]=useState(null);
    const{
        register,
        handleSubmit,
        reset,
        formState:{errors}
      }=useForm({
        mode:"onChange",
     defaultValuse:{...user}
    });

     const onSubmit=async(data)=>{}
    const handleClose=()=>{
        dispatch(UpdataProfile(false))
    }
    const handleSelect=(e)=>{
        setPicture(e.target.files[0])
    }
  return (
  <>
    <div  className='fixed z-50 inset-0 overflow-y-auto'>
<div className='flex items-center justify-center min-h-screen pt-4 px-4 text-center sm:p-0'>
<div className='fixed inset-0 transition-opacity'>
<div className='absolute inset-0 bg-[#000] opacity-70'></div>
</div>
<span className='hidden sm:inline-block sm:align-middle sm:screen'></span>
<div className=' inline-block align-bottom bg-primary rounded-lg text-left overflow-hidden shadow-xl transform translate-all
 sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'
  role='dialog'
  aria-modal='true'
  aria-labelledby='modal-headline'
 >
<div  className='flex justify-between px-6 pt-5 pb-2'>

<label
 htmlFor='name'
 className=' block font-medium text-xl text-ascent-1 text-left'
>

Edit Profile

</label>
<button className=' text-ascent-1' onClick={handleClose}><MdClose size={22}/></button>
</div>

<form className=' px-4 sm:px-6 flex flex-col gap-3 2xl:gap-6'
 onSubmit={handleSubmit(onSubmit)}>
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
  <TextInput
label='Profession'
placegolder='text'
styles='w-full'
register={register("profession",{
    required:"Profession do no match"
}
)}
error={errors.profession ?errors.profession?.message :""}
/>
<TextInput
label='Location'
placegolder='text'
styles='w-full'
register={register("location",{
    required:"Location do no match"
}
)}
error={errors.location ?errors.location?.message :""}
/>

<lebal className='flex items-center gap-1 text-base text-ascent-1 hover:text-ascent-1 cursor-pointer my-4'>

<input type="file"
       className=''
       id='imgUpload'
  onChange={(e)=>handleSelect(e)}
 accept='.jpg, .png ,.jpeg'
/>
</lebal>


 {
    errMsg?.message && (
        <span 
         role='alert'
         className={`text-sm ${
            errMsg?.status === "failed"
            ? "text-[#f64949fe]"
            :"text-[#2ba150fe]"
         } mt0.5`} 
        >
{errMsg?.message}
        </span>
    )
 }
 <div className='py-5 sm:flex-row-reverse border-t border-[#66666645]'>
{isSubmiting ? (
    <Loading/>
):(
    <CustomButton
     type='submit'
     containerStyles={`inline-flex justify-center rounded-md bg-blue px-8 py-3 text-sm font-medium text-white outline-none`}
     title='submit'
    />
)

}
 </div>
</form>

</div>
</div>
    </div>
  </>
  )
}

export default EditProfile