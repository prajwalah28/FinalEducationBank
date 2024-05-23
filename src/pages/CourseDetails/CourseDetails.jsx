import React from 'react'
import { FaStar } from "react-icons/fa";
import { IoMdTimer } from "react-icons/io";
import { AiOutlineGlobal } from "react-icons/ai";
import { MdOutlineSubtitles } from "react-icons/md";
import python from '../../assets/images/python.png'
import { FaRupeeSign } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import WhatYouLearn from './WhatYouLearn';
import Includes from "./Includes";
import Coding from './Coding'
import Requirements from './Requirement';

const CourseDetails = () => {
  return (
    <>
    <div className='relative '>
    <div className='bg-black text-white px-16 mb-64 '>
      <div>
        <h1 className='text-3xl font-bold  pt-28'>
          The Complete Python Bootcamp From Zero To <br/> Hero In Python
        </h1>
      </div>
      <div>
        <p className='  mt-4 font-thin text-xl '>
        Learn Python like a professional start from basics and go
         all the way <br/> to creating your own application and games
        </p>
      </div>


      <div className='flex flex-row gap-4 text-xl  mt-6'>

        <div className='text-2xl'>
          4.5
        </div>

        <div className='flex flex-row text-yellow-400 gap-2 mt-1 text-2xl'>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />

        </div>

        <div>
          <p>(503,231)</p>
        </div>

      </div>



      <div className=' flex flex-col gap-3 mt-4'>

        <div className='flex flex-row gap-2'>
          <div className='mt-1'><IoMdTimer size={25} /></div>
          <div>Last Updated 8/24</div>
        </div>

        <div className='flex flex-row gap-2'>
          <div><AiOutlineGlobal size={25}/></div>
          <div>English</div>
        </div>

        <div className='flex flex-row gap-2 pb-8'>
          <div><MdOutlineSubtitles size={25}/></div>
          <div >English and Hindi</div>
        </div>

      </div>

    </div>

    <div className='absolute top-40 right-40 w-fit flex flex-col items-end'>
      <div className='w-8/12 border-2 '><img src={python}  className=''/></div>
      
      <div className='bg-white w-8/12 border-2 pl-7 drop-shadow-xl'>
      <div className='flex flex-row gap-2 text-xl pl-9 font-medium'>
        <div className='mt-7'><FaRupeeSign /></div>
        <div>
        <h1 className='mt-5 font-bold text-2xl pl-2'>3,499</h1>
        </div>
      </div>
      <div className='flex flex-row text-xl font-bold gap-6 pl-8'>
        <div className='px-12 py-2 bg-orange-500 text-white rounded ml-2 mt-6'><button>Buy this Course</button></div>
        <div className='px-4 py-1 bg-orange-500 text-white rounded ml-6 mt-6'><button><FaRegHeart  size={28} className='mt-1'/>
        </button></div>
      </div>
      <div className='text-center mt-6 gap-4 text-gray-400 text-lg'>
        <p>Full Lifetime Access</p>
        <p>15-Day Money-Back Guarantee</p>
      </div>
      <div className='flex flex-row mt-4 justify-center gap-6 font-medium underline mb-6 text-lg' >
        <a href="">Share</a>
        <a href="">Gift this Course</a>
      </div>
      </div>
    </div>

    </div>
    <WhatYouLearn/>
    <Includes/>
    <Coding/>
    <Requirements/>

    </>
  )
}

export default CourseDetails