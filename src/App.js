import React from 'react'
import './App.css'
import * as AFRAME from 'aframe'
// import * as THREE from 'three'
import 'aframe-text-geometry-component'

function App() {
  React.useEffect(() => {})
  return (
    <div className="App">
      <a-scene>
        <a-assets>
          <img
            id="texture"
            src="https://cdn.aframe.io/a-painter/images/floor.jpg"
            crossorigin="anonymous"
          />
          <img
            id="skyTexture"
            src="https://cdn.aframe.io/a-painter/images/sky.jpg"
            crossorigin="anonymous"
          />
        </a-assets>

        <a-entity
          text-geometry="value:Superlewing;align: center;height: 1;size: 5;"
          material="color: #333333;"
          position="-20 0 -50"
          rotation="-10 0 0"
          animation="property: rotation; to: 10 0 0 ; loop: true; dur: 1000; easing: linear; dir: alternate"
        ></a-entity>
        {/* 
        <a-entity
          position="0 0 -3"
          rotation="0 -20 0"
          text="value: Superlewing;align: center; width: 30;color: white;"
        ></a-entity> */}

        <a-entity position="0 0 0">
          <a-entity camera look-controls wasd-controls></a-entity>
        </a-entity>
        <a-entity hand-controls="hand: left"></a-entity>
        <a-entity hand-controls="hand: right"></a-entity>
      </a-scene>
    </div>
  )
}

export default App
