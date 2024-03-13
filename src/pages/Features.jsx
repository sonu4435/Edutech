import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Features = () => {
  return (
    <div className="h-full w-full flex items-center">
      <div className="left w-1/2 h-full flex justify-center">
        <div className='w-3/4 h-full p-32'>
          <h1 className='text-6xl font-medium pb-16 font-dosis'>Online Learning wherever and whenever.</h1>
          <button className='px-6 py-4 bg-[#0f3b15] rounded-full text-white font-bold flex gap-3'>learn more <ArrowForwardIcon /></button>
        </div>
      </div>
      <div className="right w-1/2 h-full flex items-start pt-20 justify-center">
        <div className="flex w-2/3 h-2/3 items-start">
          <div className="leftContent relative w-1/2 h-full flex items-start p-10">
            <h1 className='text-9xl text-[#f2f1f1]'>01</h1>
            <div className="mainText absolute w-full h-1/3  flex flex-col items-start">
              <h1 className='text-2xl px-10 pt-20 pb-5 font-semibold text-nowrap capitalize'>Setting clear goals</h1>
              <h3 className='text-lg px-10 font-normal pb-10'>One of the most important keys to success is setting clear and specific goals.</h3>
            </div>
            <div className="bottomText absolute w-full h-1/3 bottom-[10%] flex flex-col items-start">
              <h1 className='text-9xl absolute text-[#f2f1f1]'>03</h1>
              <h1 className='text-2xl px-10 z-10 pt-20 pb-5 font-semibold text-nowrap capitalize'>Consistency </h1>
              <h3 className='text-lg px-10 font-normal pb-10'>Success is rarely achieved overnight.</h3>
            </div>
          </div>
          <div className="RightContent relative w-1/2 h-full flex items-center p-10">
            <h1 className='text-9xl text-[#f2f1f1]'>02</h1>
            <div className="mainText absolute w-full h-1/3  flex flex-col items-start">
              <h1 className='text-2xl px-10 pt-28 pb-5 font-semibold text-nowrap capitalize'>Positive mindset</h1>
              <h3 className='text-lg px-10 font-normal pb-10'> Another key to success is having a positive mindset.</h3>
            </div>
            <div className="bottomText absolute w-full h-1/3 bottom-[10%] flex flex-col items-start">
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features