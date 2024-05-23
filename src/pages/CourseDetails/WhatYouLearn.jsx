import React from 'react'
import { TiTick } from "react-icons/ti";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from 'react';
import SeeMore from './SeeMore';
import Coding from './Coding'



const WhatYouLearn = () => {
    const[isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
    }
  return (
    <>
    <div className='border-2 border-orange-500 mt-24  px-10 flex flex-col  mb-16 items-center w-full '>
     <div><h1 className='text-3xl font-bold  mt-4'>What you'll learn</h1></div>
    <div className='flex flex-row  gap-10 text-xl mt-12 mb-6 '>
        
        <div className='flex flex-col gap-8'>
            <div className='flex flex-row gap-2'>
                <div className='mt-1'><TiTick size={24}/></div>
                <div>You will learn how to leverages the power of <br/> Python to solve tasks.</div>
            </div>

            <div className='flex flex-row gap-2'>
                <div className='mt-1'><TiTick size={24} /></div>
                <div>You will learn how to leverages the power of <br/> Python to solve tasks.</div>
            </div>

            <div className='flex flex-row gap-2'>
                <div className='mt-1'><TiTick size={24} /></div>
                <div>You will learn how to leverages the power of <br/> Python to solve tasks.</div>
            </div>

            <div className='flex flex-row font-medium text-orange-400'>
            <div>
                <button onClick={true}>
                    See more
                </button>
            </div>
            <div><RiArrowDropDownLine size={36} /></div>
            </div>
        </div>

        <div className='flex flex-col gap-8'>
            <div className='flex flex-row gap-2'>
                <div className='mt-1'><TiTick size={24} /></div>
                <div>You will learn how to leverages the power of <br/> Python to solve tasks.</div>
            </div>

            <div className='flex flex-row gap-2'>
                <div className='mt-1'><TiTick size={24} /></div>
                <div>You will learn how to leverages the power of <br/> Python to solve tasks.</div>
            </div>

            <div className='flex flex-row gap-2'>
                <div className='mt-1'><TiTick size={24} /></div>
                <div>You will learn how to leverages the power of <br/> Python to solve tasks.</div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default WhatYouLearn;