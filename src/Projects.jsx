import React from 'react'
import Typical from 'react-typical'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import Tilt from 'react-parallax-tilt';

const projects = [
  {
    projectName: "CashGrab",
    date: 'March - July 2023',
    icon: './CashGrab.png',
    gitLink: 'https://github.com/ark-24/CashGrab---Capstone-Project',
    tech: 'React, TypeScript, Node.js, ExpressJS, MongoDB, Socket.IO, RaspberryPi',
    summary: `
    An intuitive MERN web app tailored for a computer vision-based cash POS system tailored towards retail businesses. CashGrab skillfully implements user registration, seamless login, and easy access to transaction execution/history, income management, 
    and financial statistics. Additionally, the integration of a resilient bi-directional communication pipeline using Socket.IO enables rapid and secure transaction execution, enhancing efficiency, and improving the user experience in interaction with Raspberry Pi-controlled devices.`
      
  },
 
];
const ProjectCard = (props) => {
  const {project} = props

return (
  <>
 
    
          <Card sx={{ maxWidth: 450 }}>
      <CardMedia
        sx={{ height:'400px',   objectFit: 'cover', }}
        image={project.icon}
        // title={project.projectName}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {project.projectName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.summary}
        </Typography>
      </CardContent>
      <CardActions style={{ justifyContent:'center', }}>
      <GitHubIcon
            className="gitIcon"
            onClick={() => window.open(project.gitLink, '_blank')}
            // color="primary"
            fontSize="large"
          />
      </CardActions>
    </Card>
    </>
)
}

const Projects = () => {
    const steps = ['Projects',2000]

  return (
    <>
     <h2 style={{ fontFamily: 'Roboto', color: 'white', display:'flex', fontSize:'35px', justifyContent:'center'}}>
            <Typical steps={steps}></Typical>

          </h2>
          <Tilt tiltEnable={false} scale={0.01} transitionSpeed={5000}>

          <div className='projects'>
          {projects.map(project => {return(
            <ProjectCard project={project} />
          )})}
    
          </div>
    </Tilt>

    
    </>
  )
}

export default Projects