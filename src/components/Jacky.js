import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'
import { useLoader, useFrame } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useLoader(GLTFLoader, '/jacky.gltf')

  return (
    <group ref={group} {...props} dispose={null}>
      <scene>
        <mesh material={materials['Glow White 2']} geometry={nodes['Extrude1'].geometry} name="Extrude1" />
        <mesh material={materials['Glow White 2']} geometry={nodes['Rounding_1'].geometry} name="Rounding_1" />
        <mesh material={materials['Glow White 2']} geometry={nodes['Rounding_2'].geometry} name="Rounding_2" />
        <mesh material={materials['Plastic Dark  Procedural']} geometry={nodes['Extrude'].geometry} name="Extrude" />
        <mesh material={materials['Plastic Dark  Procedural']} geometry={nodes['Cap_1'].geometry} name="Cap_1" />
        <mesh material={materials['Plastic Dark  Procedural']} geometry={nodes['Cap_2'].geometry} name="Cap_2" />
      </scene>
    </group>
  )
}
