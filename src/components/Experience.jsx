import React from 'react'
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";
  import Typical from 'react-typical'
import Tilt from 'react-parallax-tilt';


  // import CH  from './CH.png';
  const experiences = [
    {
      title: "Software Engineer Co-op",
      company_name: "Voronoi Health Analytics",
      icon: './Voronoi.png',
      iconBg: "#ffffff",//"#383E56",
      date: "September - December 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Junior Software Developer Co-op",
      company_name: "Design IT",
      icon: './DesIT.png',
      iconBg: "#E6DEDD",
      date: "May - December 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Software QA Engineer Co-op",
      company_name: "Change Healthcare",
    //   icon: shopify,
    icon: './CH.png',

      iconBg: "#383E56",
      date: "January - August 2020",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    
  ];

  const ExperienceCard = ({ experience }) => {
    return (
      <VerticalTimelineElement
        contentStyle={{
          background: "#1d1836",
          color: "#fff",
        }}
        contentArrowStyle={{ borderRight: "7px solid  #232631" }}
        date={experience.date}
        iconStyle={{ background: experience.iconBg }}
        icon={
            <img
              src={experience.icon}
              alt={experience.company_name}
              // className='imgLogo'
              style={{width: '60px',
                height: '60px',
                borderRadius: '50%'}}
            />
        }
      >
        <Tilt>
        <div>
          <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
          <p
            className='text-secondary text-[16px] font-semibold'
            style={{ margin: 0 }}
          >
            {experience.company_name}
          </p>
        </div>
        <ul className='mt-5 list-disc ml-5 space-y-2'>
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className='text-white-100 text-[14px] pl-1 tracking-wider'
              style={{fontFamily: 'Roboto'}}
            >
              {point}
            </li>
          ))}
        </ul>
        </Tilt>

      </VerticalTimelineElement>
    );
  };
  
  const Experience = () => {
    const steps = ['Work Experience',2000]
    return (
      <>
          <h2 style={{ fontFamily: 'Roboto', color: 'white', display:'flex',fontSize:'35px', justifyContent:'center'}}>
            <Typical steps={steps}></Typical>
          </h2>
          <br></br>
        <div className='mt-20 flex flex-col'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
              />
            ))}
          </VerticalTimeline>
        </div>
      </>
    );
  };
  export default Experience;