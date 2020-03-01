import * as THREE from 'three'
import React, { useEffect, useRef, useState } from 'react'
import { useLoader, useFrame, useThree } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import lerp from 'lerp'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useLoader(GLTFLoader, '/jacky.glb')
  const { size, viewport } = useThree()
  const aspect = size.width/ viewport.width
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    if(group.current){
      group.current.position.x = lerp(group.current.position.x, props.mouse.current[0] / aspect / 40, 0.1)
      group.current.rotation.x = lerp(group.current.rotation.x, 0 + props.mouse.current[1] / aspect / 30, 0.1)
      group.current.rotation.y = lerp(group.current.rotation.y, 0 + props.mouse.current[0] / aspect / 30, 0.1)
      if(hovered){
        //group.current.
      }
      else{
        console.log("not hover")
      }
    }
  })

  return (
    <group
    ref={group}
    {...props}
    scale = {active ? [2, 2, 2] : [1, 1, 1]}
    dispose={null}
    onPointerOver={e => setHover(true)}
    onPointerOut={e => setHover(false)}
    onClick={e => setActive(!active)}>
      <scene name="Root Scene">
        <group name="RootNode">
          <primitive object={nodes.CINEMA_4D_Editor} />
          <group name="JACKY" position={[0, 0, -0.05]}>
            <mesh
              material={materials['Plastic Shiny warped Procedural']}
              geometry={nodes.Extrude_1.geometry}
              name="Extrude_1"
              position={[0, 0, -0.05]}>
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
              position={[0, 0, 0.05]}>
              <mesh material={materials['Plastic Dark  Procedural']} geometry={nodes.Cap_1.geometry} name="Cap_1" />
              <mesh material={materials['Plastic Dark  Procedural']} geometry={nodes.Cap_2.geometry} name="Cap_2" />
            </mesh>
          </group>
        </group>
      </scene>
    </group>
  )
}