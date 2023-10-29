import { useEffect, useState } from "react"; // Import 'useState'
import { useTexture } from "@react-three/drei";
import { BackSide } from "three";

export default function SphereEnv() {
  const envTextures = [
    "aristea_wreck_puresky.jpg",
    "belfast_sunset_puresky.jpg",
    "kloofendal_43d_clear_puresky.jpg",
    "sunflowers_puresky.jpg",
  ];

  const [randomIndex, setRandomIndex] = useState(0);

  useEffect(() => {
    setInterval(() => {
      const newIndex = Math.floor(Math.random() * envTextures.length);
      setRandomIndex(newIndex);
    }, 60000);
  }, []);

  const map = useTexture(`../../textures/${envTextures[randomIndex]}`);

  return (
    <mesh>
      <sphereGeometry args={[60, 50, 50]} />
      <meshBasicMaterial side={BackSide} map={map} />
    </mesh>
  );
}
