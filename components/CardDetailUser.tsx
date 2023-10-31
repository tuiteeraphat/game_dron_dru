import { useSelector } from "react-redux";

export default function CardDetailUser() {
  const gameData = useSelector((state: any) => state.game);
  console.log(gameData);

  return (
    <div className="top-5 right-5 fixed z-50">
      <div className="bg-gradient-to-br from-[#3d30a2a4] to-[#89216ba4] w-[400px] backdrop-blur-2xl py-5 rounded-t-2xl flex flex-col items-center justify-center">
        {gameData.is_practice && (
          <>
            <span className="text-white">
              อนุญาติให้ฝึกซ้อมได้ในระยะเวลา{" "}
              <span className="font-bold">{gameData.time_practice}</span> วินาที
            </span>
            <span className="text-white">หากหมดเวลาระบบจะเก็บคะแนนจริง</span>
          </>
        )}

        {!gameData.is_practice && gameData.is_real && (
          <span className="text-white text-center">
            รอบที่ {gameData.round} เริ่มโหมดเก็บคะแนนจริงเริ่มแล้ว
            <br />
            จะหมดในระยะเวลา{" "}
            <span className="font-bold">{gameData.time_real}</span> วินาที
          </span>
        )}

        {!gameData.is_practice &&
          !gameData.is_real &&
          gameData.is_real_end &&
          gameData.round <= 3 && (
            <>
              <span className="text-white text-center">
                รอบเกมได้จบลงแล้วที่{" "}
                <span className="font-bold">{gameData.score}</span> คะแนน
              </span>
              <span className="text-white text-center">
                รอบถัดไปกำลังจะเริ่มในระยะเวลา{" "}
                <span className="font-bold">{gameData.time_end}</span> วินาที
              </span>
            </>
          )}

        {!gameData.is_practice &&
          !gameData.is_real &&
          gameData.is_real_end &&
          gameData.round == 4 && (
            <>
              <span className="text-white text-center">
                เกมได้จบลงแล้วที่ทั้งหมด{" "}
                <span className="font-bold">{gameData.score}</span> คะแนน
              </span>
              <span className="text-white text-center">
                ขอบคุณที่สนใจเข้าร่วมเล่นเกมกับเรา
                <br />
                คุณยังสามารถเล่นต่อได้ในโหมดอิสระ
              </span>
            </>
          )}
      </div>

      <div className="w-[400px] py-2 px-5 flex flex-col justify-center bg-gray-500/50 backdrop-blur-2xl rounded-b-2xl shadow mb-5 text-white">
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
          <span className="my-2">ห่วงทั้งหมด</span>
          <span className="my-2">
            {gameData.myTargets} / {gameData.totalTargets}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="my-2">คะแนน</span>
          <span className="my-2">{gameData.score}</span>
        </div>
        <div className="flex justify-center">
          <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
            เริ่มเกมใหม่
          </button>
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
