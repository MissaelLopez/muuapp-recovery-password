import { useEffect, useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";

const App = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const getParams = () => {
    const url = window.location.search;
    const urlParams = new URLSearchParams(url);
    const encodeData = urlParams.get("data");
    const decodeData = JSON.parse(atob(encodeData));
    console.log(decodeData);
    setEmail(decodeData.email);
    setName(decodeData.name);
  };

  useEffect(() => {
    getParams();
  }, []);

  return (
    <>
      <Header />
      <div className="text-center text-3xl py-10">
        <p className="font-bold mb-5">¡Hola {name}!</p>
        <p>Recupera tu contraseña</p>
      </div>
      <form>
        <Input />
        <Input />
      </form>
    </>
  );
};

export default App;
