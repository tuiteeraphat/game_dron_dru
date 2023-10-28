import Button from "@/components/Button";
import TextFieldInput from "@/components/TextFieldInput";
import { motion } from "framer-motion";

export default function Register() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-24 bg-drone`}
    >
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-[500px] py-20 lg:py-0  flex flex-col items-center justify-center border bg-gray-500 backdrop-blur-2xl rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none">
          <img
            src="/images/u_logo.png"
            alt="dru_logo"
            className="w-fit h-fit"
          />
        </div>

        <div className="bg-white/30 px-5 md:px-20 py-10 backdrop-blur-2xl shadow-md flex flex-col w-full lg:w-[500px] rounded-b-3xl lg:rounded-r-3xl lg:rounded-bl-none items-center">
          <TextFieldInput type="text" placeholder="รหัสประจำตัว* ตย.OPEN8415" />
          <TextFieldInput type="text" placeholder="รหัสผ่าน*" />

          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button text="เริ่มเกม" />
          </motion.div>
        </div>
      </div>
    </main>
  );
}
