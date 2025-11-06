import { useState } from "react";
import MyInput from "./MyInput";
import "../Example.css";

const Example2 = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h2 className="title">Example 2</h2>
      <div className="input">
        <span>Login: {login}</span>
        <span>Password: {password}</span>
      </div>

      <div className="input">
        <MyInput type="text" onChange={setLogin} label="Enter login: " />
        <MyInput
          type="password"
          onChange={setPassword}
          label="Enter password: "
        />
      </div>
    </div>
  );
};

export default Example2;
