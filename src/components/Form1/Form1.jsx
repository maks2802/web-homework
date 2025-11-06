import { useState } from "react";
import "./Form1.css";

const Form1 = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Логін:", login);
    console.log("Пароль:", password);
  };

  return (
    <form onSubmit={handleSubmit} className="content-1">
      <label className="field-1">
        Логін:
        <input
          type="text"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          placeholder="Введіть логін"
        />
      </label>
      <label className="field-1">
        Пароль:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Введіть пароль"
        />
      </label>
      <button type="submit" className="button-1">
        Надіслати
      </button>
    </form>
  );
};

export default Form1;
