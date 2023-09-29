const skills = [
    {
      name: 'JavaScript',
      logo: '/js.png'
    },
    {
      name: 'Python',
      logo: '/python.png'
    },
    {
      name: 'React',
      logo: '/logo512.png'
    },
    {
      name: 'TypeScript',
      logo: '/ts.png'
    },
    {
      name: 'HTML',
      logo: '/html.png'
    },
    {
      name: 'CSS',
      logo: '/css.png'
    },
    {
      name: 'C',
      logo: '/c.png'
    },
    {
      name: 'C++',
      logo: '/c++.png'
    },
    {
      name: 'C#',
      logo: '/csharp.png'
    },
    {
      name: 'Node.js',
      logo: '/nodejs.png'
    },
    {
      name: 'Express.js',
      logo: '/expressjs.png'
    },
    {
      name: 'SQL',
      logo: '/sql.png'
    },
   
    {
      name: '.NET Core',
      logo: '/net.png'
    },
    {
      name: 'Unity',
      logo: '/unity.png'
    },
   
    {
        name: 'Docker',
        logo: '/docker.png'
      },
    {
      name: 'AWS',
      logo: '/aws.png'
    },
   

  ];

  
  const experiences = [
    {
      title: "Software Engineer Co-op",
      company_name: "Voronoi Health Analytics",
      icon: './Voronoi.png',
      iconBg: "#ffffff",
      date: "September - December 2023",
      points: [
        "Developed a PET scan viewer that interfaces with a deep neural network for 3D image processing to facilitate radiologists' workflow by enabling organ cross-sectional analysis",
        "Created UI and functional enhancements using C++, Qt Framework, Python, and JavaScript",
        
      ],
    },
    {
      title: "Junior Software Developer Co-op",
      company_name: "Design IT",
      icon: './DesIT.png',
      iconBg: "#E6DEDD",
      date: "May - December 2022",
      points: [
        "Developed and created modules consisting of user interfaces and API endpoints using React, TypeScript, .NET, and SQL, improving client productivity by ~40%",
        "Fixed bugs, added enhancements, and refactored code in both front-end and back-end components to ensure optimal performance and functionality",
        "Collaborated in a team environment using Agile methodology and attended daily stand-up and demo meetings",
      ],
    },
    {
      title: "Software QA Engineer Co-op",
      company_name: "Change Healthcare",
    icon: './CH.png',

      iconBg: "#383E56",
      date: "January - August 2020",
      points: [
        "Packaged Program Temporary Fixes (PTF) manually and through automated tools to rectify issues ",
        "Conducted front-end and back-end testing to reproduce and fix issues reported by clients ",
        "Investigated product issues with team members to find solutions",
        "Mentored and directed new interns on PTF packaging and testing to ensure seamless workflow"
      ],
    },
    
  ];
  const projects = [
    {
      projectName: "CashGrab",
      icon: './CashGrab.png',
      gitLink: 'https://github.com/ark-24/CashGrab---Capstone-Project',
      tech: 'React, TypeScript, Node.js, ExpressJS, MongoDB, Socket.IO, RaspberryPi',
      summary: `
      An intuitive MERN web app developed for a computer vision-based cash POS system tailored towards retail businesses. CashGrab skillfully implements user registration, seamless login, and easy access to transaction execution/history, income management, 
      and financial statistics. Additionally, the integration of a resilient bi-directional communication pipeline using Socket.IO,  enables rapid and secure transaction execution, enhancing efficiency, and improving the transaction process for small businesses.`
        
    },
    {
      projectName: "Hand Gesture Shortcut",
      icon: './HGS.png',
      gitLink: 'https://github.com/ark-24/HandGestureShortcut',
      tech: 'Python, OpenCV, MediaPipe, TensorFlow, Keras',
      summary: `
      This innovative project combines computer vision and deep learning to create a gesture-controlled computer interface. Using a webcam, the system recognizes and interprets hand gestures in real-time. It offers a user-friendly menu where users can select actions like opening Google, a calculator, Notepad, volume settings, or Facebook through simple hand gestures.
       The system employs the MediaPipe library for hand tracking and a pre-trained deep learning model for gesture recognition. This project showcases the potential for hands-free and intuitive computer interaction through gesture recognition.`
        
    },
  
    {
      projectName: "Portfolio Site",
      icon: './portfolio.png',
      gitLink: 'https://github.com/ark-24/Portfolio-Project',
      tech: 'React, TypeScript, JavaScript, HTML, CSS',
      summary: `
      This portfolio website showcases my diverse range of skills, experiences and projects. Through an elegant and user-friendly interface, visitors can explore a curated collection of my work, including web applications, software development projects, and more. The site offers a glimpse into my technical expertise and creativity.
       It provides valuable insights into my professional journey, demonstrating my passion for innovation and problem-solving. With easy navigation and responsive design, my portfolio website offers a seamless experience for anyone looking to discover my talents and accomplishments.`
        
    },
   
  ];
  export { skills, experiences, projects  };
  