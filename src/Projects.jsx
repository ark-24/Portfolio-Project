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
import { projects } from './assets/constants';

const ProjectCard = (props) => {
  const {project} = props

return (
  <>
 
    
          <Card sx={{ maxWidth: 450 }}>
      <CardMedia
        sx={{ height:'400px'  }}
        image={project.icon}
        // title={project.projectName}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {project.projectName}
        </Typography>
        <Typography component="div" style={{fontSize:'12px'}}>
        {project.tech}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{paddingTop:'10px'}}>
          {project.summary}
        </Typography>
      </CardContent>
      <CardActions style={{ justifyContent:'center', }}>
          {/* <Tilt tiltEnable={false} scale={0.01} transitionSpeed={5000}> */}

      <GitHubIcon
            className="gitIcon"
            onClick={() => window.open(project.gitLink, '_blank')}
            // color="primary"
            fontSize="large"
          />
    {/* </Tilt> */}

      </CardActions>
    </Card>
    </>
)
}

const Projects = () => {

  return (
    <>
     <h2 style={{ fontFamily: 'Roboto', color: 'white', display:'flex', fontSize:'35px', justifyContent:'center'}}>
            <Typical steps={['Projects',2000]}></Typical>

          </h2>
          {/* <Tilt tiltEnable={false} scale={0.01} transitionSpeed={5000}> */}


          <div className='projects' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',paddingTop:'10px' }}>
          {projects.map((project,i) => {return(
            <ProjectCard project={project} key={i} />
          )})}
    
          </div>

    
    </>
  )
}

export default Projects