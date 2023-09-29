import React, { useState, useEffect } from 'react';
import ParticlesBackground from './Particles/ParticlesBackground';
import './Home.scss';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import ArticleIcon from '@mui/icons-material/Article';
import { Page, pdfjs, Document } from 'react-pdf';
import { Viewer, Worker  } from '@react-pdf-viewer/core';
import ReactDOM from 'react-dom';

const Home = () => {


  return (
    <>
      <div>
        <ParticlesBackground />
        <div className='info'>
          <span className='intro'> Hi, I'm Abdul</span>
          <span className='aboutMe'>
            I'm a Computer Engineering student driven by a passion for crafting inventive and effective solutions to intricate challenges. My expertise spans across diverse sectors, including medical software and web development, equipping me with the skills to leverage cutting-edge technologies for organizational growth and achievement. Feel free to explore my resume and connect with me on LinkedIn or GitHub for more insights into my profile!
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
            onClick={() => window.open('https://github.com/ark-24', '_blank')}
            // color="primary"
            fontSize="large"
          />
          {/* <ArticleIcon
            className="ghIcon"
            onClick={() => setOpenPDF(true)}
            // color="primary"
            fontSize="large"
          /> */}
          <EmailIcon
            className="mailIcon"
            onClick={() => window.location.href = 'mailto:abdulrkhan47@gmail.com'}
            color="primary"
            fontSize="large"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
