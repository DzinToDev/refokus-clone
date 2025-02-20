import React from 'react'
import { BsArrowReturnRight } from "react-icons/bs";

const Button = () => {
  return (
    <div className='w-42 bg-zinc-100 px-4 py-1.5 rounded-full text-black flex items-center justify-evenly'>
        <span className='text-sm'>Get Started</span>
        <BsArrowReturnRight />
    </div>
  )
}

export default Button