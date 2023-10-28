import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import GameRender from "./gameRender";
import CardDetailUser from "@/components/CardDetailUser";

export default function Home() {
  return (
    <main className="w-screen h-screen relative flex flex-col items-center justify-between">
      <CardDetailUser />

      {/* main render game this */}
      <Canvas shadows>
        <Suspense fallback={null}>
          <GameRender />
        </Suspense>
      </Canvas>
    </main>
  );
}
