import React from 'react'
import { Link } from 'react-router-dom'

const 
Navbar = () => {
    return (
        <div className="w-full px-5 !text-[#595757] fixed block font-spacegrotesk z-[9999] bg-white">
            <div className="nav w-full border-b h-auto flex item-center justify-around py-5 px-20">
                <div className="logo capitalize text-3xl font-bold text-[#0095FF]/80 items-center">
                    EduTech
                </div>
                <div className="navItems flex item-center gap-10 items-center">
                    <li className='list-none text-xl font-medium -[#595757]'><Link className='capitalize' href="/home">Home</Link></li>
                    <li className='list-none text-xl font-medium -[#595757]'><Link className='capitalize' href="/about">About</Link></li>
                    <li className='list-none text-xl font-medium -[#595757]'><Link className='capitalize' href="/contact">Contact</Link></li>
                    <li className='list-none text-xl font-medium -[#595757]'><Link className='capitalize' href="/blog">Blog</Link></li>
                    <li className='list-none text-xl font-medium -[#595757]'><Link className='capitalize' href="/stories">Success Stories</Link></li>
                </div>
                <div className="buttons flex gap-5">
                    <button className='px-5 font-semibold text-xl -[#6c6b6b]'>Login</button>
                    <button className='bg-[#0095FF] text-white px-8 py-2 rounded-full font-bold'>Sign up</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar