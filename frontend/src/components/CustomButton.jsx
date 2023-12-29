import React from 'react'

function CustomButton({title,containerStyles,iconRight,type,onClick}) {
  return (
    
<button  onClick={onClick}
        type={type || "button"}
        className={`inline-flex items-center text-base rounded-lg   ${containerStyles}`}

>
{title}
{iconRight && <div  className='ml-2'>{iconRight}</div>}


</button>


   
  )
}

export default CustomButton