import React, { useState, useEffect } from 'react';
import ParticlesBackground from './Particles/ParticlesBackground';
import './Home.scss';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import ArticleIcon from '@mui/icons-material/Article';
import FileViewer from 'react-file-viewer'; // Correct import statement
import { Page, pdfjs, Document } from 'react-pdf';
// import document from '../document.pdf'
import { Viewer, Worker  } from '@react-pdf-viewer/core';
import ReactDOM from 'react-dom';
interface ModalExampleProps {
  fileUrl: string;
}
const Home: React.FC<ModalExampleProps> = ({ fileUrl }) => {
  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  });

  const [openPDF, setOpenPDF] = useState(false);
  

  const modalBody = () => (
    <div
        style={{
            backgroundColor: '#fff',
            flexDirection: 'column',
            overflow: 'hidden',

            /* Fixed position */
            left: 500,
            position: 'fixed',
            top: 0,

            /* Take full size */
            height: '100%',
            width: '50%',
            // justifyContent: 'center',
            // alignContent: 'center',
            /* Displayed on top of other elements */
            zIndex: 9999,
        }}
    >
        <div
            style={{
                alignItems: 'center',
                backgroundColor: '#000',
                color: '#fff',
                display: 'flex',
                padding: '.5rem',
            }}
        >
            <div style={{ marginRight: 'auto', alignContent: 'center' }}>Resume</div>
            <button
                style={{
                    backgroundColor: '#357edd',
                    border: 'none',
                    borderRadius: '4px',
                    color: '#ffffff',
                    cursor: 'pointer',
                    padding: '8px',
                }}
                onClick={() => setOpenPDF(false)}
            >
                Close
            </button>
        </div>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js">
        <div
              style={{
                // border: '1px solid rgba(0, 0, 0, 0.3)',
                height: '100%',
                // width: '100%',
                  flexGrow: 1,
                  overflow: 'auto',
            }}
        >
            <Viewer fileUrl='../Resume.pdf' initialPage={0} />
            
        </div>
        </Worker>
    </div>
);


  return (
    <>
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
            onClick={() => window.open('https://github.com/ark-24', '_blank')}
            // color="primary"
            fontSize="large"
          />
          <ArticleIcon
            className="ghIcon"
            onClick={() => setOpenPDF(true)}
            // color="primary"
            fontSize="large"
          />
          <EmailIcon
            className="mailIcon"
            onClick={() => window.location.href = 'mailto:abdulrkhan47@gmail.com'}
            color="primary"
            fontSize="large"
          />
        </div>
      </div>
      {openPDF && ReactDOM.createPortal(modalBody(), document.body)}
    </>
  );
};

export default Home;
