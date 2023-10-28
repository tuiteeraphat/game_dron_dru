import Button from "@/components/Button";
import TextFieldInput from "@/components/TextFieldInput";

export default function Register() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 bg-drone`}
    >
      <div className="flex">
        <div className="w-[500px] flex flex-col items-center justify-center bg-gray-500/30 backdrop-blur-2xl rounded-l-3xl">
          <img
            src="/images/u_logo-removebg-preview.png"
            alt="dru_logo"
            className="w-fit h-fit"
          />
        </div>

        <div className="bg-white/30 py-10 backdrop-blur-2xl shadow-md flex flex-col w-[500px] rounded-r-3xl items-center">
          <TextFieldInput type="text" placeholder="รหัสประจำตัว* ตย.OPEN8415" />
          <TextFieldInput type="text" placeholder="รหัสผ่าน*" />
          <Button text="เริ่มเกม" />
        </div>
      </div>
    </main>
  );
}
