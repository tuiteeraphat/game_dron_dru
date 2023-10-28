export default function Home() {
  return (
    <main className="w-screen h-screen relative flex flex-col items-center justify-between">
      <div className="top-5 right-5 fixed">
        <div className="bg-gradient-to-br from-[#3d30a2a4] to-[#89216ba4] w-[500px] backdrop-blur-2xl py-5 rounded-t-2xl flex flex-col items-center justify-center">
          <span className="text-xl text-white">
            อนุญาติให้ฝึกซ้อมได้ในระยะเวลา <span className="font-bold">60</span>{" "}
            วินาที
          </span>
          <span className="text-xl text-white">
            หากหมดเวลาระบบจะเก็บคะแนนจริง
          </span>
        </div>

        <div className="w-[500px] h-64 p-5 flex flex-col justify-center bg-gray-500/30 backdrop-blur-2xl rounded-b-2xl shadow mb-5 text-white">
          <div className="flex justify-between">
            <span className="text-xl my-2">รหัสประจำตัว</span>
            <span className="text-xl my-2">OPEN8415</span>
          </div>
          <div className="flex justify-between">
            <span className="text-xl my-2">ชื่อผู้เล่น</span>
            <span className="text-xl my-2">มิโน ทดสอบ</span>
          </div>
          <div className="flex justify-between">
            <span className="text-xl my-2">ชื่อโรงเรียน</span>
            <span className="text-xl my-2">
              โรงเรียนหลวงพ่อปานคลองด่านอนุสรณ์
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-xl my-2">คะแนน</span>
            <span className="text-xl my-2">5,200</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#3d30a2a4] to-[#89216ba4] w-[500px] backdrop-blur-2xl py-5 rounded-t-2xl flex flex-col items-center justify-center">
          <span className="text-xl text-white">สถิติการเล่นสูงสุด</span>
        </div>
        <div className="w-[500px] h-64 bg-gray-500/30 backdrop-blur-2xl rounded-b-2xl shadow p-5 text-white">
          <div className="flex justify-between">
            <span>มิโน ทดสอบ</span>
            <span>โรงเรียนหลวงพ่อปานคลองด่านอนุสรณ์</span>
            <span>5,200 คะแนน</span>
          </div>
        </div>
      </div>

      <img
        src="/images/background.jpg"
        className="w-full h-full object-cover"
      />
    </main>
  );
}
