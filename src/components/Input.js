import { useState } from "react";
import Eye from "./Eye";
import EyeSlash from "./EyeSlash";

const Input = (props) => {
  const [hidden, setHidden] = useState(false);

  const toggleChange = (e) => {
    e.preventDefault();
    setHidden(!hidden);
  };

  const handleChange = (e) => {
    if (e.target.name === "password") {
      props.setPassword(e.target.value);
    } else {
      props.setRepeatPassword(e.target.value);
    }
  };

  return (
    <div className="flex flex-row gap-2 items-center justify-center mb-5">
      <input
        {...props}
        onChange={handleChange}
        type={hidden ? "password" : "text"}
        className="ml-5 outline-none border border-black rounded-lg px-2 py-1 sm:w-full md:w-1/6 text-center"
      />
      <button onClick={toggleChange}>{hidden ? <Eye /> : <EyeSlash />}</button>
    </div>
  );
};

export default Input;
