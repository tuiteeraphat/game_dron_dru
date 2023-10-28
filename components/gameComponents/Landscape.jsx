import React, { useEffect, useMemo } from "react";
import { MeshReflectorMaterial, useGLTF } from "@react-three/drei";
import { Color, MeshStandardMaterial } from "three";

export default function Landscape(props) {
  const { nodes, materials } = useGLTF("models/scene.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.landscape_gltf.geometry}
        material={materials["Material.009"]}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.landscape_borders.geometry}
        material={materials["Material.010"]}
      />
      <mesh
        geometry={nodes.trees_light.geometry}
        material={materials["Material.008"]}
        castShadow
        receiveShadow
      />
      <mesh geometry={nodes.lights.geometry} castShadow />
    </group>
  );
}

useGLTF.preload("assets/models/scene.glb");
