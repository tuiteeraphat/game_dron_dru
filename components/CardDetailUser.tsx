export default function CardDetailUser() {
  return (
    <div className="top-5 right-5 fixed z-50">
      <div className="bg-gradient-to-br from-[#3d30a2a4] to-[#89216ba4] w-[400px] backdrop-blur-2xl py-5 rounded-t-2xl flex flex-col items-center justify-center">
        <span className="text-white">
          อนุญาติให้ฝึกซ้อมได้ในระยะเวลา <span className="font-bold">60</span>{" "}
          วินาที
        </span>
        <span className="text-white">หากหมดเวลาระบบจะเก็บคะแนนจริง</span>
      </div>

      <div className="w-[400px] h-44 px-5 flex flex-col justify-center bg-gray-500/50 backdrop-blur-2xl rounded-b-2xl shadow mb-5 text-white">
        <div className="flex justify-between">
          <span className="my-2">ไอดีผู้เล่น</span>
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

      <div className="bg-gradient-to-br from-[#3d30a2a4] to-[#89216ba4] w-[400px] backdrop-blur-2xl py-5 rounded-t-2xl flex flex-col items-center justify-center">
        <span className="text-white">สถิติการเล่นสูงสุด</span>
      </div>
      <div className="w-[400px] bg-gray-500/50 backdrop-blur-2xl rounded-b-2xl shadow p-5 text-white">
        <div className="flex justify-between items-center">
          <span className="mr-2">1.</span>
          <span>มิโน ทดสอบ</span>
          <span>โรงเรียนหลวงพ่อปานคลองด่านอนุสรณ์</span>
          <span>5,200</span>
        </div>
      </div>
    </div>
  );
}
