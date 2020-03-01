import React, { Suspense, useEffect, useRef, useState, useCallback } from 'react'
import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Canvas, useFrame, useLoader } from 'react-three-fiber'
import Main from './Main';
import Jacky from './Jacky'

const sceneSetup = () => {
    
}

const addCustomSceneObjects  = () => {

}

const startAnimationLoop = () => {

}

function Box(props) {
    // This reference will give us direct access to the mesh
    const mesh = useRef()
  
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
  
    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))
  
    return (
      <mesh
        {...props}
        ref={mesh}
        scale={active ? [2, 2, 2] : [1, 1, 1]}
        onClick={e => setActive(!active)}
        onPointerOver={e => setHover(true)}
        onPointerOut={e => setHover(false)}>
        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
        <meshStandardMaterial attach="material" color={hovered ? 'hotpink' : 'orange'} />
      </mesh>
    )
}

export default function Body(props) {
    const [hovered, hover] = useState(false)
    const [down, set] = useState(false)
    const mouse = useRef([0,0])
    const onMouseMove = useCallback(({ clientX: x, clientY: y}) => (mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2]), [])

    useEffect(() => {
        sceneSetup()
        addCustomSceneObjects()
        startAnimationLoop()
    })

    return (
        <div className="body">
            <Canvas className="canvas"
                camera={{ position: [0, 0, 10], fov: 60, near: 0.1, far: 5000 }}
                onMouseMove={onMouseMove}
                onMouseUp={() => set(false)}
                onMouseDown={() => set(true)}>
                <ambientLight />
                <pointLight position={[0, 100, 10]} />
                {/* <Box position={[0, 0, 0]} />
                <Box position={[2, 0, 0]} />
                <Box position={[-2, 0, 0]} /> */}
                <Suspense fallback={null}>
                    <Jacky mouse={mouse}/>
                </Suspense>
            </Canvas>
            <Main />
            {/* <a href="https://github.com/drcmda/react-three-fiber" class="top-left" children="Github" />
            <a href="https://twitter.com/0xca0a" class="top-right" children="Twitter" />
            <a href="https://github.com/react-spring/react-spring" class="bottom-left" children="+ react-spring" />
            <a href="https://www.instagram.com/tina.henschel/" class="bottom-right" children="Illustrations @ Tina Henschel" />
            <span class="header-major">testing</span>
            <span class="header">REACT TEST THREE FIBER</span> */}
        </div>
      )
}
