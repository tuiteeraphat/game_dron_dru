interface propsType {
  text: string;
}

export default function Button({ text }: propsType) {
  return (
    <button className="p-4 bg-white/50 w-32 lg:w-64 rounded-3xl shadow my-5 bg-gradient-to-br from-[#3D30A2] to-[#89216bd2] text-white">
      {text}
    </button>
  );
}
