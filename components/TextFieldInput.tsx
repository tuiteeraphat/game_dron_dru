interface propsType {
  type: string;
  placeholder?: string;
}

export default function TextFieldInput({ type, placeholder }: propsType) {
  return (
    <input
      type={`${type}`}
      placeholder={`${placeholder || ""} `}
      className="p-4 focus: outline-purple-500 w-64 lg:w-96 rounded-3xl shadow my-5"
    />
  );
}
