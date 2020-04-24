import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import Blobs from './Blobs'

export default () => (
  <Canvas>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Blobs position={[-1.2, 0, 0]} />
    <Blobs position={[1.2, 0, 0]} />
  </Canvas>
)
