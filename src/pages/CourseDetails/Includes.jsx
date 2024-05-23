import React from 'react'
import { GrArticle } from "react-icons/gr";
import { FaCode } from "react-icons/fa";
import { CgInfinity } from "react-icons/cg";
import { FaMobileAlt } from "react-icons/fa";
import { PiCertificateBold } from "react-icons/pi";
import { PiVideo } from "react-icons/pi";




const Includes = () => {
  return (
    <div className='px-8 flex flex-col items-center mb-6 '>
        <h1 className='text-3xl font-bold  mb-4 flex '>This course includes:</h1>

        <div className='flex flex-row gap-36 text-2xl mb-6 font-semibold mt-7'>
            <div className='flex flex-col gap-8'>
                <div className='flex flex-row gap-4'>
                <div className='mt-1'><PiVideo/></div>
                <div><h2>22 total on-demand videos</h2></div>
                </div>

                <div className='flex flex-row gap-4'>
                <div className='mt-1'><FaCode/></div>
                <div><h2>19 coding exercise</h2></div>
                </div>

                <div className='flex flex-row gap-4'>
                <div className='mt-1'><FaMobileAlt/></div>
                <div><h2>Access on mobile and desktop</h2></div>
                </div>
            </div>

            <div className='flex flex-col gap-8'>
                <div className='flex flex-row gap-4'>
                <div className='mt-1'><GrArticle/></div>
                <div><h2>15 Articles</h2></div>
                </div>

                <div className='flex flex-row gap-4'>
                <div className='mt-1'><CgInfinity/></div>
                <div><h2>Lifetime access</h2></div>
                </div>

                <div className='flex flex-row gap-4'>
                <div className='mt-1'><PiCertificateBold/></div>
                <div><h2>Certificate of completion</h2></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Includes