import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Bloom, EffectComposer, SMAA, SSAO } from "@react-three/postprocessing";
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
import {
  practiceCountdown,
  realCountdown,
  endCountdown,
} from "../store/gameReducer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function Home() {
  const dispatch = useDispatch();
  const gameData = useSelector((state) => state.game);

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
    let interval;

    if (gameData.round <= 3) {
      if (gameData.is_real && !gameData.is_real_end) {
        interval = setInterval(() => {
          dispatch(realCountdown());
        }, 1000);
      }

      if (!gameData.is_real && gameData.is_real_end) {
        interval = setInterval(() => {
          dispatch(endCountdown());
        }, 1000);
      }
    }

    return () => {
      clearInterval(interval);
    };
  }, [dispatch, gameData.is_real, gameData.is_real_end]);

  return (
    <main className="w-screen h-screen relative flex flex-col items-center justify-between">
      {/* show player detail */}
      <GuiSetting />
      <CardDetailUser />
      {!gameData.is_real && gameData.is_practice && (
        <div>
          <div className="p-5 fixed flex flex-col text-white bottom-40 left-0 m-5 bg-gray-500/50 backdrop-blur-2xl rounded-2xl w-[400px] z-50">
            <span>W - หันหน้าลง</span>
            <span>A - หันหน้าซ้าย</span>
            <span>S - หันหน้าขึ้น</span>
            <span>D - หันหน้าขวา</span>
            <span>Left Shift(ค้าง) - เร่งความเร็ว Turbo</span>
          </div>

          <div className="p-5 fixed flex flex-col text-white bottom-0 left-0 m-5 bg-gray-500/50 backdrop-blur-2xl rounded-2xl w-[400px] z-50">
            <span>การแข่งขันจะแบ่งเป็น 3 รอบ</span>
            <span>*รอบที่ 1 ห่วงทั้งหมด 25 ห่วงละ 5 คะแนนที่ 60 วินาที</span>
            <span>*รอบที่ 2 ห่วงทั้งหมด 15 ห่วงละ 10 คะแนนที่ 45 วินาที</span>
            <span>*รอบที่ 3 ห่วงทั้งหมด 5 ห่วงะ 15 คะแนนที่ 35 วินาที</span>
          </div>
        </div>
      )}

      {/* main render game this */}
      <Canvas shadows>
        <Suspense fallback={null}>
          <SphereEnv />
          <Environment background={false} files={"textures/envmap.hdr"} />
          <PerspectiveCamera makeDefault position={[0, 10, 10]} />
          <OrbitControls target={[0, 0, 0]} />

          <Landscape />
          {gameData.is_real && <Targets />}
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
          <EffectComposer smaa>
            <Bloom />
            {/* <SSAO /> */}
          </EffectComposer>

          <EffectComposer>
            <MotionBlur />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </main>
  );
}
