import React from 'react'

const LandingPage = () => {
    return (
        <div className='h-screen w-full flex relative mt-20'>
            <div className="LeftSide w-1/2 flex h-full flex-col items-start mt-48 p-5">
                <h4 className='px-24 font-medium text-[#969696] text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, ratione?</h4>
                <div className="middleText w-full flex p-24 pt-5">
                    <h1 className='font-bold text-6xl leading-[4.5rem] tracking-wide capitalize'>Empower Your Future Where Aspirations Meet Opportunities</h1>
                </div>
                <div className="buttons flex gap-10 px-24">
                    <button className='px-6 py-4 bg-blue-600/90 text-lg text-white font-bold rounded-2xl'>Get started</button>
                    <button className='px-8 py-4 border-[1px] text-lg border-black text-black font-bold rounded-2xl'>Explore</button>
                </div>
            </div>
            <div className="RightSide w-1/2 h-full flex items-start mt-28 justify-center overflow-hidden rounded-2xl">
                <div className="image w-2/4 h-2/3">
                    <img className='h-full w-full select-none object-cover object-top' src={"https://i.pinimg.com/736x/49/38/fe/4938fe5c5cc4a7121208bbf3e9fc0534.jpg"} alt="." />
                </div>
            </div>
        </div>
    )
}

export default LandingPage