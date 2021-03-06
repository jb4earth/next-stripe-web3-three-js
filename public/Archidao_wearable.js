/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/archidao_wearable.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <primitive object={nodes.Avatar_Hips} />
        <skinnedMesh geometry={nodes.M_uBody_Atari_TShirt_Green.geometry} material={materials.ArchiDAOBlack} skeleton={nodes.M_uBody_Atari_TShirt_Green.skeleton} />
      </group>
      <mesh geometry={nodes.Cylinder.geometry} material={materials['Material.001']} position={[0, 1.78, 0]} scale={0.75} />
    </group>
  )
}

useGLTF.preload('/archidao_wearable.gltf')
