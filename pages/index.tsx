import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { EffectComposer, SMAA } from "@react-three/postprocessing";
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
import { Targets } from "@/components/gameComponents/Targets";
import { MotionBlur } from "@/components/gameComponents/MotionBlur";
import { practiceCountdown, realCountdown } from "../store/gameReducer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function Home() {
  const dispatch = useDispatch();
  const gameData = useSelector((state: any) => state.game);

  useEffect(() => {
    if (gameData.is_practice) {
      const interval = setInterval(() => {
        dispatch(practiceCountdown());
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [dispatch, gameData.is_practice]);

  useEffect(() => {
    if (gameData.is_real && !gameData.is_real_end) {
      const interval = setInterval(() => {
        dispatch(realCountdown());
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [dispatch, gameData.is_real, gameData.is_real_end]);

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

          {/* point or targets load */}
          {gameData.is_real && <Targets />}

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
            <MotionBlur />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </main>
  );
}
