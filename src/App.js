import React from 'react'
import './App.css'
import * as AFRAME from 'aframe'
// import * as THREE from 'three'
import FiberCanvas from './components/FiberCanvas'
import 'aframe-text-geometry-component'

function App() {
  React.useEffect(() => {})
  return (
    <div className="App">
      <FiberCanvas />
      <FiberCanvas />
      <FiberCanvas />
    </div>
  )
}

export default App
