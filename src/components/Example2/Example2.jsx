import { useState } from "react";
import MyInput from "./MyInput";
import styles from "../Example.module.css";

const Example2 = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h2 className={styles.title}>Example 2</h2>
      <div className={styles.input}>
        <span>Login: {login}</span>
        <span>Password: {password}</span>
      </div>

      <div className={styles.input}>
        <MyInput
          type="text"
          onChange={setLogin}
          label="Enter login: "
          placeholder="Login"
        />
        <MyInput
          type="password"
          onChange={setPassword}
          label="Enter password: "
          placeholder="Password"
        />
      </div>
    </div>
  );
};

export default Example2;
