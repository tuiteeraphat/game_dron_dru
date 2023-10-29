import { useGLTF } from "@react-three/drei";

export default function Landscape(props) {
  const { nodes, materials } = useGLTF("../../models/scene.glb");

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.landscape_gltf.geometry}
        material={materials["Material.009"]}
        castShadow
        receiveShadow
      />
    </group>
  );
}

useGLTF.preload("models/scene.glb");
