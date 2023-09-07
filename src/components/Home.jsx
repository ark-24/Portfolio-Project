import React from 'react'
import Navbar from './Navbar/Navbar'
import ParticlesBackground from './Particles/ParticlesBackground';
import './Home.scss'

const Home = () => {
  return (
    <div  >
    <ParticlesBackground/>
    <span className='intro'> Hi, I'm Abdul</span>

    </div>
  )
}

export default Home