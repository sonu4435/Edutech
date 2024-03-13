import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="w-full px-5 absolute z-[9999] bg-white">
            <div className="nav w-full h-auto border-b-[1px] border-[#969696] flex item-center justify-between p-5 px-20">
                <div className="logo capitalize text-3xl font-bold text-[#0095FF]/80 items-center">
                    EduTech
                </div>
                <div className="navItems flex item-center gap-14 items-center">
                    <li className='list-none text-xl font-medium text-[#595757]'><Link className='capitalize' href="/home">Home</Link></li>
                    <li className='list-none text-xl font-medium text-[#595757]'><Link className='capitalize' href="/about">About</Link></li>
                    <li className='list-none text-xl font-medium text-[#595757]'><Link className='capitalize' href="/contact">Contact</Link></li>
                    <li className='list-none text-xl font-medium text-[#595757]'><Link className='capitalize' href="/blog">Blog</Link></li>
                    <li className='list-none text-xl font-medium text-[#595757]'><Link className='capitalize' href="/stories">Success Stories</Link></li>
                </div>
                <div className="buttons flex gap-5">
                    <button className='px-5 font-semibold text-xl text-[#6c6b6b] '>Login</button>
                    <button className='bg-[#0095FF] text-white px-6 py-3 rounded-full font-bold'>Sign up</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar