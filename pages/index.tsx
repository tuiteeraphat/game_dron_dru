import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import {
  EffectComposer,
  HueSaturation,
  SMAA,
  Glitch,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import CardDetailUser from "@/components/CardDetailUser";
import {
  PerspectiveCamera,
  Environment,
  OrbitControls,
} from "@react-three/drei";
import GuiSetting from "@/components/gameComponents/GuiSetting";
import Landscape from "@/components/gameComponents/Landscape";
import SphereEnv from "@/components/gameComponents/SphereEnv";
import { Airplane } from "@/components/gameComponents/Airplane";
import { MotionBlur } from "@/components/gameComponents/MotionBlur";

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

          {/* drone load */}
          <Airplane />

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

          <EffectComposer multisampling={0}>
            <SMAA />
          </EffectComposer>

          <EffectComposer>
            {/* <Glitch /> */}
            <MotionBlur />
            <HueSaturation
              blendFunction={BlendFunction.NORMAL}
              hue={-0.15}
              saturation={0.1}
            />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </main>
  );
}
