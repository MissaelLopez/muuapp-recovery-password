import { useEffect, useState } from "react";

const App = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const getParams = () => {
    const url = window.location.pathname.slice(1);
    const decode = JSON.parse(atob(url));
    setEmail(decode.email);
    setName(decode.name);
  };

  useEffect(() => {
    getParams();
  }, []);

  return (
    <>
      <div>
        Recuperacion de password: {name} - {email}
      </div>
      <form>
        <input type="password" name="password" placeholder="Nuevo password" />
        <br />
        <input type="password" name="password" placeholder="Repite password" />
        <br />
        <input type="submit" value="Cambiar Password" />
      </form>
    </>
  );
};

export default App;
