import React from 'react';
import Sphere from './Sphere/Sphere';
import { skills } from '../assets/skill';
import './Skills.scss';

const Skills = () => {
  const skillsPerRow = 3; // Number of skills to display per row

  return (
    <>
    <h2 style={{ fontFamily: 'Roboto', color: 'white', display:'flex', justifyContent:'center'}}>
            Skills
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
