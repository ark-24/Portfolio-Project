import React from 'react';
import ParticlesBackground from './Particles/ParticlesBackground';
import './Home.scss';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
const Home = () => {
  return (
    <div>
      <ParticlesBackground />
      <div className='info'>
        <span className='intro'> Hi, I'm Abdul</span>
        <span className='aboutMe'>
          I'm a software engineer driven by a passion for crafting inventive and effective solutions to intricate challenges. My expertise spans across diverse sectors, including medical software and web development, equipping me with the skills to leverage cutting-edge technologies for organizational growth and achievement. Feel free to explore my resume and connect with me on LinkedIn or GitHub for more insights into my profile!
        </span>
      </div>
      <div className="icons">
        <LinkedInIcon
          className="liIcon"
          onClick={() => window.open('https://www.linkedin.com/in/abdul-raheem-khan-26a19718b/', '_blank')}
          color="primary"
          fontSize="large"
        />
        <GitHubIcon
          className="ghIcon"
          onClick={() => window.open('https://github.com/yourgithubusername', '_blank')}
          // color="primary"
          fontSize="large"
        />
         <EmailIcon
          className="ghIcon"
          onClick={() => window.open('https://github.com/yourgithubusername', '_blank')}
          // color="primary"
          fontSize="large"
        />
      </div>
    </div>
  );
}

export default Home;
