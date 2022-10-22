import Eye from "./Eye";
import EyeSlash from "./EyeSlash";

const Input = (props) => {
  return (
    <div className="flex flex-row gap-2 items-center justify-center mb-5">
      <input
        {...props}
        className="ml-5 outline-none border border-black rounded-lg px-2 py-1 sm:w-full md:w-1/6"
      />
      <Eye />
    </div>
  );
};

export default Input;
