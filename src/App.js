import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route, Routes,  } from 'react-router-dom';
import Home from './components/Home.tsx';
import Navbar from './components/Navbar/Navbar'
import './components/Navbar/index.scss'
import ParticlesBackground from './components/Particles/ParticlesBackground';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './Projects';

function App() {
  return (
   <>
   <div>
    {/* <ParticlesBackground/> */}
      <div className='NavBar'>
   <Navbar/>
   </div>

    <Routes>
    <Route path='/'  element={<Home/>}/>
    <Route path='/experience'  element={<Experience/>}/>
    <Route path='/skills'  exact element={<Skills/>}/>
    <Route path='/projects'  exact element={<Projects/>}/>


    </Routes>
   </div>

   </>
  );
}

export default App;
