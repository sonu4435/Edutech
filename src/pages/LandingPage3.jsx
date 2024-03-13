import React from 'react'

const LandingPage3 = () => {
    return (
        <div className='h-screen w-full flex relative pt-5 border-b'>
            <div className="LeftSide w-1/2 flex h-full flex-col items-start  justify-center p-5">
                <h4 className='px-24 font-medium text-[#969696] text-lg font-berkshire'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, ratione?</h4>
                <div className="middleText w-full flex p-24 pt-5 pb-2">
                    <h1 className='font-bold text-6xl leading-[4.5rem] tracking-wide font-dosis capitalize'>Empower Your Future Where Aspirations Meet Opportunities</h1>
                </div>
                <div className="extra text-xl py-20 px-28 flex gap-20">
                    <div>
                    <h1 className='border-b-[2px] border-[#6bfa4f] py-2 font-bold'>540+</h1>
                    <span className='py-2'>Cources</span>
                    </div>
                    <div>
                    <h1 className='border-b-[2px] border-[#6bfa4f] py-2 font-bold'>50+</h1>
                    <span className='py-2'>Teachers</span>
                    </div>
                </div>
                <div className="buttons flex gap-10 px-24">
                    <button className='px-6 py-4 bg-blue-600/90 text-lg text-white font-bold rounded-2xl'>Get started</button>
                    <button className='px-10 py-2 border-[1px] text-lg border-black text-black font-bold rounded-2xl'>Explore</button>
                </div>
            </div>
            <div className="RightSide w-1/2 h-full flex items-center justify-center px-10 mt-10">
                <div className="imagediv rounded-2xl w-[75%] h-3/4 grid grid-cols-2 gap-3 overflow-hidden">
                    <div className="">
                        <img src="https://images.unsplash.com/photo-1584697964156-deca98e4439d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='object-cover hover:scale-105 duration-200 ease-linear cursor-pointer object-center h-full w-full' alt="StudyImage" />
                    </div>
                    <div className="">
                        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='object-cover hover:scale-105 duration-200 ease-linear cursor-pointer object-center h-full w-full rounded-2xl p-2' alt="StudyImage" />
                    </div>
                    <div className="rounded-full hover:rounded-none overflow-hidden duration-500">
                        <img src="https://plus.unsplash.com/premium_photo-1682787494765-44d02d12f5be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='object-cover hover:scale-105 duration-300 ease-linear cursor-pointer object-center h-full w-full p-5' alt="StudyImage" />
                    </div>
                    <div className="">
                        <img src="https://plus.unsplash.com/premium_photo-1683887034072-ce1d1c3bb2a2?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='object-cover hover:scale-105 duration-200 ease-linear cursor-pointer object-center h-full w-full' alt="StudyImage" />
                    </div>
                </div>
            </div>
            <div className="scroll absolute bottom-0 left-1/2 -translate-y-1/2 -translate-x-1/2 text-lg text-[#969696] font-medium uppercase">
                scroll 
            </div>
        </div>
    )
}

export default LandingPage3