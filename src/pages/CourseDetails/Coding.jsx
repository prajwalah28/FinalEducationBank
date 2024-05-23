import React from 'react'
import code from '../../assets/images/code.jpg';

const Coding = () => {
  return (
    <div className=' bg-gray-200 flex items-center'>
    <div className='flex flex-row items-center justify-center w-fit gap-24 py-2 '>
        <div className=' flex flex-col gap-16'>
        <div className='text-3xl font-bold'><h1>Coding Exercise</h1></div>
        <div className='text-2xl font-medium'><h2>This course includes our updated <br/>
                coding exercises so you can <br/>
                practice your skills as you learn.</h2></div>
        <div className='text-xl underline'><a href=''>see demo</a></div>
        </div>

        <div className='w-6/12 justify-end object-cover'>
            <div ><img src={code} /></div>
        </div>
    </div>
    </div>
  )
}

export default Coding;