import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'
import { useLoader, useFrame } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useLoader(GLTFLoader, '/jacky.glb')
  
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (group.current.rotation.y += 0.01))

  return (
    <group ref={group} {...props} dispose={null}>
      <scene name="AuxScene">
        <group>
          <primitive object={nodes.CINEMA_4D_Editor} />
          <group name="JACKY" position={[0, 0, -4.69]}>
            <mesh
              material={materials['Plastic Shiny warped Procedural']}
              geometry={nodes.Extrude_1.geometry}
              name="Extrude_1"
              position={[0, 0, -4.69]}>
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
              position={[0, 0, 4.69]}>
              <mesh material={materials['Plastic Dark  Procedural']} geometry={nodes.Cap_1.geometry} name="Cap_1" />
              <mesh material={materials['Plastic Dark  Procedural']} geometry={nodes.Cap_2.geometry} name="Cap_2" />
            </mesh>
          </group>
        </group>
      </scene>
    </group>
  )
}
