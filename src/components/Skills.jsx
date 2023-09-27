import React from 'react';
import Sphere from './Sphere/Sphere';
import { skills } from '../assets/constants';
import './Skills.scss';
import Typical from 'react-typical'

const Skills = () => {
  const skillsPerRow = 3; // Number of skills to display per row
  const steps = ['Skills', 2000]
  return (
    <>
    <h2 style={{ fontFamily: 'Roboto', color: 'white', display:'flex', fontSize:'35px', justifyContent:'center'}}>
            <Typical steps={steps}></Typical>

          </h2>
    <div className='skills-container'>
        
      {skills.map((skill, index) => (
        <div key={skill.name} className='skill-item'>
          <Sphere skilled={skill} index={index}/>
        </div>
      ))}
    </div>
    </>
  );
};

export default Skills;
