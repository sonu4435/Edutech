import React from 'react'
import logo  from '../resources/noun-arrow-down-539946.svg'

const LandingPage2 = () => {
  return (
    <div className="h-screen w-full relative bg-[#fff]">
      <div className="circle h-[50vh] w-[25vw] absolute top-1/3 left-2/3 -translate-y-1/4 -translate-x-1/2  rounded-full bg-[#fff153]" />
      <div className="text w-full h-full flex flex-col items-center justify-center relative gap-5 pb-20 z-[99]">
        <h1 className='text-9xl font-berkshire text-black mr-40'>Empower your feature</h1>
        <h1 className='text-7xl ml-[35rem]  text-black font-dosis'>Plan your dream</h1>
      </div>
      <div className="Arrow absolute h-20 w-20 bottom-[10%] left-[10%] !cursor-pointer m-20">
        <svg width="100%" height="100%" className='object-cover h-full w-full' viewBox="0 0 132 132" fill="none" xmlns="http://www.w3.org/2000/svg" style={{translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)"}}>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M114.168 101.559V6.30454L132 6.30453V132H6.30453L6.30454 114.168H101.559L0 12.6091L12.6091 0L114.168 101.559Z" fill="#daff71"></path>
        </svg>
        </div>
    </div>
  )
}

export default LandingPage2