import { useEffect, useState } from "react";
import Button from "./components/Button";
import Header from "./components/Header";
import Input from "./components/Input";

const App = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const getParams = () => {
    const url = window.location.search;
    const urlParams = new URLSearchParams(url);
    const encodeData = urlParams.get("data");
    const decodeData = JSON.parse(atob(encodeData));
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
        <Input
          placeholder="Nueva contraseña"
          name="password"
          setPassword={setPassword}
        />
        <Input
          placeholder="Repite la contraseña"
          name="repeat"
          setRepeatPassword={setRepeatPassword}
        />
        <Button
          password={password}
          repeatPassword={repeatPassword}
          email={email}
        />
      </form>
    </>
  );
};

export default App;
