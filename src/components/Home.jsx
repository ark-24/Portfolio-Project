import React from 'react'
import Navbar from './Navbar/Navbar'
import ParticlesBackground from './Particles/ParticlesBackground';
import './Home.scss'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Stack from "@mui/material/Stack";

const Home = () => {
  return (
    <div  >
    <ParticlesBackground/>
    <div className='info'>
    <span className='intro'> Hi, I'm Abdul</span>
    <span className='aboutMe'>I'm a software engineer driven by a passion for crafting inventive and effective solutions to intricate challenges. My expertise spans across diverse sectors, including medical software and web development, equipping me with the skills to leverage cutting-edge technologies for organizational growth and achievement. 
      Feel free to explore my resume and connect with me on LinkedIn for more insights into my profile!</span>
    </div>
    <div className="icons">
    <LinkedInIcon onClick={event => window.open('https://www.google.com', '_blank')} color="primary" fontSize="large" sx={{display: 'flex',
    justifyContent: 'center'}} />

    </div>
    </div>
  )
}

export default Home