import React from "react";

const Button = (props) => {
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const data = { email: props.email, password: props.password };

      const res = await fetch(
        `${process.env.REACT_APP_SERVER}/api/users/new-password`,
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: { "Content-Type": "application/json" },
        }
      );

      const resp = await res.json();
      alert(resp.msg);
    } catch (error) {
      alert("Ha ocurrido un error");
    }
  };

  return (
    <button
      disabled={
        props.password !== props.repeatPassword || props.password === ""
          ? true
          : false
      }
      onClick={handleClick}
      type="submit"
      className={
        props.password !== props.repeatPassword || props.password === ""
          ? "opacity-50 block mx-auto my-10 cursor-not-allowed bg-[#c79556] rounded-md px-5 py-2 text-white font-bold"
          : "block mx-auto my-10 cursor-pointer bg-[#c79556] rounded-md px-5 py-2 text-white font-bold"
      }
    >
      Cambiar contraseña
    </button>
  );
};

export default Button;
