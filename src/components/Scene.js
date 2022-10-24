import React from 'react';
//threejs 
import { Canvas } from '@react-three/fiber';

const Scene = ({ children }) => {
  return <Canvas>{children}</Canvas>;
}

export default Scene;