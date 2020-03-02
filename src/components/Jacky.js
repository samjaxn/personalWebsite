import * as THREE from 'three'
import React, { useEffect, useRef, useState } from 'react'
import { useSpring, animated } from 'react-spring/three' 
import { useLoader, useFrame, useThree } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import lerp from 'lerp'

export default function Model({mouse, ...props}) {
  const group = useRef()
  const { nodes, materials, animations } = useLoader(GLTFLoader, '/jacky.glb')

  const { size, viewport } = useThree()
  const aspectX = size.width/ viewport.width
  const aspectY = size.height/ viewport.height

  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  const { ...spring } = useSpring({
    scale: hovered ? [1.2, 1.2, 1.2] : [1, 1, 1],
    config: { mass: 10, tension: 1000, friction: 300, precision: 0.00001 }
  })

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    if(group.current){
      group.current.position.x = lerp(group.current.position.x, mouse.current[0] / aspectX / 35, 0.1)
      group.current.rotation.x = lerp(group.current.rotation.x, 0 + mouse.current[1] / aspectX / 15, 0.1)
      group.current.rotation.y = lerp(group.current.rotation.y, 0 + mouse.current[0] / aspectY / 40, 0.1)

      active ? group.current.rotation.x = lerp(group.current.rotation.x, group.current.rotation.x, 0.1) : group.current.rotation.x = lerp(group.current.rotation.x,  group.current.rotation.x + THREE.Math.degToRad(360), 0.1)
    }
  })

  return (
    <animated.group
    ref={group}
    dispose={null}
    {...spring}
    {...props}
    onPointerOver={e => setHover(true)}
    onPointerOut={e => setHover(false)}
    onClick={e => setActive(!active)}>
      <scene name="Root Scene">
        <group name="RootNode">
          <primitive object={nodes.CINEMA_4D_Editor} />
          <group name="JACKY">
            <mesh
              material={materials['Plastic Shiny warped Procedural']}
              geometry={nodes.Extrude_1.geometry}
              name="Extrude_1"
              position={[0, -0.51, -0.05]}>
              <mesh
                material={materials['Plastic Shiny warped Procedural']}
                geometry={nodes.Rounding_1.geometry}
                name="Rounding_1"
              />
              <mesh
                material={materials['Plastic Shiny warped Procedural']}
                geometry={nodes.Rounding_2.geometry}
                name="Rounding_2"
              />
            </mesh>
            <mesh
              material={materials['Plastic Dark  Procedural']}
              geometry={nodes.Extrude.geometry}
              name="Extrude"
              position={[0, -0.51, 0.05]}>
              <mesh material={materials['Plastic Dark  Procedural']} geometry={nodes.Cap_1.geometry} name="Cap_1" />
              <mesh material={materials['Plastic Dark  Procedural']} geometry={nodes.Cap_2.geometry} name="Cap_2" />
            </mesh>
          </group>
        </group>
      </scene>
    </animated.group>
  )
}