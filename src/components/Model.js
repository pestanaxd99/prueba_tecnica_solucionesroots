import React from 'react';
import { ThreeMFLoader } from 'three/examples/jsm/loaders/3MFLoader';
import { useLoader } from '@react-three/fiber';
import model from '../assets/crabe-pirate/crab.3mf';
// import model from '../assets/pumpkin'

const Model = () => {
  const geom = useLoader(ThreeMFLoader, model)
  return (
    <group rotation={[-Math.PI/2,0,0]}>        
        <primitive object={geom} />        
    </group>
  )
}

export default Model