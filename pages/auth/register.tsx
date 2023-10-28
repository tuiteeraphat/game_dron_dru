import Button from "@/components/Button";
import TextFieldInput from "@/components/TextFieldInput";
import { motion } from "framer-motion";

export default function Register() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 bg-drone`}
    >
      <div className="flex">
        <div className="w-[500px] flex flex-col items-center justify-center bg-gray-500 backdrop-blur-2xl rounded-l-3xl">
          <img
            src="/images/u_logo.png"
            alt="dru_logo"
            className="w-fit h-fit"
          />
        </div>

        <div className="bg-white/30 py-10 backdrop-blur-2xl shadow-md flex flex-col w-[500px] rounded-r-3xl items-center">
          <TextFieldInput
            type="text"
            placeholder="ชื่อในเกม* โปรดใช้ชื่อที่สุภาพ"
          />
          <TextFieldInput type="text" placeholder="มาจากโรงเรียน*" />
          {/* <TextFieldInput type="text" placeholder="รหัสประจำตัว*" /> */}
          <TextFieldInput type="text" placeholder="รหัสผ่าน*" />
          <TextFieldInput type="text" placeholder="ยืนยันรหัสผ่านอีกครั้ง*" />
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button text="สมัครสมาชิก" />
          </motion.div>
        </div>
      </div>
    </main>
  );
}
