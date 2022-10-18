import { useEffect, useState } from "react";

const App = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const getParams = () => {
    const url = window.location.search;
    const urlParams = new URLSearchParams(url);
    const encodeData = urlParams.get("data");
    const decodeData = JSON.parse(
      atob(
        encodeData ||
          "eyJuYW1lIjogIk1pc3NhZWwgTG9wZXoiLCAiZW1haWwiOiAibWlzc2FlbG5qOEBnbWFpbC5jb20ifQ=="
      )
    );
    console.log(decodeData);
    setEmail(decodeData.email);
    setName(decodeData.name);
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
