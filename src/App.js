import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route, Routes,  } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar/Navbar'
import './components/Navbar/index.scss'
import ParticlesBackground from './components/Particles/ParticlesBackground';

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
    </Routes>
   </div>

   </>
  );
}

export default App;
