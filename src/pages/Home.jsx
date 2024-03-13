import React from 'react'
import Navbar from '../components/Navbar'
import LandingPage from './LandingPage'
import LandingPage2 from './LandingPage2'
import LandingPage3 from './LandingPage3'
import Features from './Features'

const Home = () => {
  return (
    <div className='w-screen h-screen overflow-x-hidden'>
        <Navbar />
        <LandingPage3 />
        <Features />
    </div>
  )
}

export default Home