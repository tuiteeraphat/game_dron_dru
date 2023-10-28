import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CardDetailUser from "@/components/CardDetailUser";
import {
  PerspectiveCamera,
  Environment,
  OrbitControls,
} from "@react-three/drei";
import SphereEnv from "@/components/gameComponents/SphereEnv";
import Landscape from "@/components/gameComponents/Landscape";
import GuiSetting from "@/components/gameComponents/GuiSetting";
export default function Home() {
  return (
    <main className="w-screen h-screen relative flex flex-col items-center justify-between">
      {/* show player detail */}
      <GuiSetting />
      <CardDetailUser />

      {/* main render game this */}
      <Canvas shadows>
        <Suspense fallback={null}>
          <SphereEnv />
          <Environment background={false} files={"textures/envmap.hdr"} />
          <PerspectiveCamera makeDefault position={[0, 10, 10]} />
          <OrbitControls target={[0, 0, 0]} />

          {/* map load */}
          <Landscape />

          <directionalLight
            castShadow
            color={"#f3d29a"}
            intensity={2}
            position={[10, 5, 4]}
            shadow-bias={-0.0005}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={0.01}
            shadow-camera-far={20}
            shadow-camera-top={6}
            shadow-camera-bottom={-6}
            shadow-camera-left={-6.2}
            shadow-camera-right={6.4}
          />
        </Suspense>
      </Canvas>
    </main>
  );
}
