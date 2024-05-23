import React from 'react'
import { FaCircle } from "react-icons/fa";
import Description from './Description';


const Requirements = () => {
  return (
    <>
    <div className='flex flex-col gap-6 px-36 mt-12 mb-4'>
        <div className='text-3xl font-bold'><h1>Requirements</h1></div>
        <div className='flex flex-row gap-6 '>
            <div className='text-orange-500 mt-2'><FaCircle /></div>
            <div className='text-2xl font-medium'>Access to a computer with an internet connection</div>
        </div>
        </div>
        <Description/>
        </>
  )
}

export default Requirements