import React, { Suspense, useEffect, useRef, useState, useCallback, useMemo } from 'react'
import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Canvas, useFrame, useLoader, useThree } from 'react-three-fiber'
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

function Sphere(props){
    const sphere = useRef()

    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

    useFrame(() => (sphere.current.rotation.y += 0.01))

    return(
        <mesh
            {...props}
            ref={sphere}
            onClick={e => setActive(!active)}
            onPointerOver={e => setHover(true)}
            onPointerOut={e => setHover(false)}>
            <sphereGeometry attach="geometry" args={[2, 16, 16]} />
            <meshStandardMaterial attach="material" color={hovered ? '#555555' : 'white'} roughness={0} metalness={0} wireframe={true}/>
        </mesh>
    )
}

function Circle({radius, ...props}){
    const segmentCount = 64
    const vertices = []

    for (var i = 0; i <= segmentCount; i++) {
        var theta = (i / segmentCount) * Math.PI * 2
        vertices.push(
            new THREE.Vector3(Math.cos(theta) * radius, Math.sin(theta) * radius, 0)
        )            
    }

    return(
        <line {...props}>
            <geometry attach="geometry" vertices={vertices} />
            <lineBasicMaterial attach="material" color={'#FFFFFF'} />
        </line>
    )
}

const Plane = ({...props}) => (
    <mesh {...props} receiveShadow>
        <planeBufferGeometry attach="geometry" args={[100,100]} />
        <meshPhysicalMaterial attach="material" color="#0a0a0a" />
    </mesh>
)

function CameraUpdate(){
    const {size, viewport, aspect, camera} = useThree()

    if(aspect < 1.4){
        camera.position.z = (-14*aspect + 24)
    }
    else{
        camera.position.z = 5
    }

    return null
}

export default function Body(props) {
    const [hovered, hover] = useState(false)
    const [mouseDown, setMouse] = useState(false)
    const [touchDown, setTouch] = useState(false)
    const mouse = useRef([0,0])
    const onMouseMove = useCallback(({ clientX: x, clientY: y}) => (mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2]), [])
    const onTouchMove = useCallback((e) => {
        var touch = e.touches[0];
        mouse.current = [touch.pageX - window.innerWidth / 2, touch.pageY - window.innerHeight / 2]
    }, [])
    const onTouchEnd = () => {
        setTouch(false)
        mouse.current = [0,0]
    }


    useEffect(() => {
        sceneSetup()
        addCustomSceneObjects()
        startAnimationLoop()
    })

    return (
        <div className="body">
            <Canvas className="canvas"
                camera={{ position: [0, 0, 5], fov: 60, near: 0.1, far: 5000 }}
                // onCreated={({ gl }) => { 
                //     gl.shadowMap.enabled = true
                //     gl.shadowMap.type = THREE.PCFSoftShadowMap
                // }}
                onMouseMove={onMouseMove}
                onTouchMove={onTouchMove}
                onMouseUp={() => setMouse(false)}
                onMouseDown={() => setMouse(true)}
                onTouchStart={() => setTouch(true)}
                onTouchEnd={onTouchEnd}>
                {/* <ambientLight /> */}
                <rectAreaLight color={0xffffff} intensity={10} width={100} height={2} position={[0, 3.5, 1.5]} onUpdate={self => self.lookAt(new THREE.Vector3(0, 0, 0))} />
                {/* <fog attach="fog" args={['black', 1, 10]} /> */}
                {/* <Box position={[0, 0, 0]} />
                <Box position={[2, 0, 0]} />
                <Box position={[-2, 0, 0]} /> */}
                <Suspense fallback={null}>
                    <Jacky mouse={mouse}/>
                </Suspense>
                {/* <Plane position={[0,0,-3]} /> */}
                {/* <Circle radius={1.5} position={[0, 0, -1]} />
                <Circle radius={2} position={[0, 0, -1]} />
                <Circle radius={2.5} position={[0, 0, -1]} /> */}
                <CameraUpdate />
            </Canvas>
            {/* <Main /> */}
            {/* <a href="https://github.com/drcmda/react-three-fiber" class="top-left" children="Github" />
            <a href="https://twitter.com/0xca0a" class="top-right" children="Twitter" />
            <a href="https://github.com/react-spring/react-spring" class="bottom-left" children="+ react-spring" />
            <a href="https://www.instagram.com/tina.henschel/" class="bottom-right" children="Illustrations @ Tina Henschel" />
            <span class="header-major">testing</span>
            <span class="header">REACT TEST THREE FIBER</span> */}
        </div>
      )
}
