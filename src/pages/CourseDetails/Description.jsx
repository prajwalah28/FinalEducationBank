import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";


const Description = () => {
  return (
    <div className='flex flex-col gap-4  font-medium px-36 mt-16 mb-8'>
        <div className='text-3xl font-bold'><h1>Description</h1></div>
        <div className='text-2xl font-semibold'><h2>Become a Python Programmer and learn one of employer’s most requested skills of 2023!</h2></div>
        <div><p>This is the more comprehensive, yet straight-forward, course for the Python programming language on NgpIT <br/>
                Whether you have never</p></div>
        <div><p>This is the more comprehensive, yet straight-forward, course for the Python programming language on NgpIT <br/>
                Whether you have never</p></div>
        <div><p>This is the more comprehensive, yet straight-forward, course for the Python programming language on NgpIT <br/>
                Whether you have never</p></div>
        <div><p>This is the more comprehensive, yet straight-forward, course for the Python programming language on NgpIT <br/>
                Whether you have never</p></div>

        <div className='flex flex-row font-bold  text-orange-500'>
        <div className='mt-1'><button>See More</button></div>
        <div><RiArrowDropDownLine size={32}/></div>
        </div>
    </div>
  )
}

export default Description