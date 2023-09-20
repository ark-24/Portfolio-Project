import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";
import { Loader } from "three";
// import { skills } from '../../assets/skill';
const Ball = (props) => {

  
  // console.log(skilled[index]);
  const { skilled, index } = props;
const decal = useTexture(skilled.skilled.logo);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <sphereGeometry attach="geometry" args={[0.9, 30, 30]} />
        <meshStandardMaterial
          color="#ffffff"
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
        />
      </mesh>
    </Float>
  );
};

const Sphere = (skilled, index) => {
  const style = { display: 'flex', justifyContent: 'center', alignItems: 'center',flexDirection: 'column',}
  return (
    <div className="group" style={style}>
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls enableZoom={false} />
        <Ball skilled={skilled}  index={index}/>
      </Suspense>

      <Preload all />
    </Canvas>
    <div style={{color: 'white', fontSize:'25px', fontFamily: 'Roboto'}}>{skilled.skilled.name}</div>
    </div>
  );
};

export default Sphere;
