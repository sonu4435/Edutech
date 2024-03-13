import React from 'react'
import Navbar from '../components/Navbar'
import LandingPage from './LandingPage'

const Home = () => {
  return (
    <div className='w-screen overflow-x-hidden'>
        <Navbar />
        <LandingPage />
    </div>
  )
}

export default Home