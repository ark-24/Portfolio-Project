import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className='bar'>
      <a href='/' className='name' style={{ textDecoration: 'none' }}>
          Abdul Raheem Khan
          </a>
        <div className="links">
          {/* <Link className="about" to="/about" style={{ textDecoration: 'none' }}>
            About Me
          </Link> */}
          <NavLink className="experience" to="/experience" style={{ textDecoration: 'none' }}>
            Experience
          </NavLink>
          <NavLink className="skills" to="/skills" style={{ textDecoration: 'none' }}>
            Skills
          </NavLink>
          <NavLink className="projects" to="/projects" style={{ textDecoration: 'none' }}>
            Projects
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Navbar;
