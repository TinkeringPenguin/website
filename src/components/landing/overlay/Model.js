/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Model({ scroll, small }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/penguin_model.glb");
  // Animate model
  useFrame((state) => {
    group.current.rotation.x = 0.08 * (scroll / 20) + 0.2;
    group.current.rotation.y = 0.04 * (scroll / 20);
  });
  return (
    <group scale={small} dispose={null} ref={group}>
      <group scale={[0.78, 1.13, 0.33]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere021.geometry}
          material={materials["Clay.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere021_1.geometry}
          material={materials.Clay}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere021_2.geometry}
          material={materials["Clay.006"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere021_3.geometry}
          material={materials["Clay.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere021_4.geometry}
          material={materials.Yello}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/penguin_model.glb");

export default Model;
