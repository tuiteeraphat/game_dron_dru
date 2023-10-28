import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Home() {
  const renderRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ canvas: renderRef.current! });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return (
    <main className="w-screen h-screen relative flex flex-col items-center justify-between">
      <div className="top-5 right-5 fixed">
        <div className="bg-gradient-to-br from-[#3d30a2a4] to-[#89216ba4] w-[400px] backdrop-blur-2xl py-5 rounded-t-2xl flex flex-col items-center justify-center">
          <span className="text-white">
            อนุญาติให้ฝึกซ้อมได้ในระยะเวลา <span className="font-bold">60</span>{" "}
            วินาที
          </span>
          <span className="text-white">หากหมดเวลาระบบจะเก็บคะแนนจริง</span>
        </div>

        <div className="w-[400px] h-44 px-5 flex flex-col justify-center bg-gray-500/30 backdrop-blur-2xl rounded-b-2xl shadow mb-5 text-white">
          <div className="flex justify-between">
            <span className="my-2">รหัสประจำตัว</span>
            <span className="my-2">OPEN8415</span>
          </div>
          <div className="flex justify-between">
            <span className="my-2">ชื่อผู้เล่น</span>
            <span className="my-2">มิโน ทดสอบ</span>
          </div>
          <div className="flex justify-between">
            <span className="my-2">ชื่อโรงเรียน</span>
            <span className="my-2">หลวงพ่อปานคลองด่านอนุสรณ์</span>
          </div>
          <div className="flex justify-between">
            <span className="my-2">คะแนน</span>
            <span className="my-2">5,200</span>
          </div>
        </div>

        {/* <div className="bg-gradient-to-br from-[#3d30a2a4] to-[#89216ba4] w-[400px] backdrop-blur-2xl py-5 rounded-t-2xl flex flex-col items-center justify-center">
          <span className="text-white">สถิติการเล่นสูงสุด</span>
        </div>
        <div className="w-[400px] bg-gray-500/30 backdrop-blur-2xl rounded-b-2xl shadow p-5 text-white">
          <div className="flex justify-between items-center">
            <span className="mr-2">1.</span>
            <span>มิโน ทดสอบ</span>
            <span>โรงเรียนหลวงพ่อปานคลองด่านอนุสรณ์</span>
            <span>5,200</span>
          </div>
        </div> */}
      </div>

      <canvas ref={renderRef}></canvas>
    </main>
  );
}
