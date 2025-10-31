import { useState } from "react";
import InputName from "./InputName";
import InputEmail from "./InputEmail";
import styles from "../Example.module.css";

const Example1 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <h2 className={styles.title}>Example 1</h2>
      <div className={styles.input}>
        <span>Name: {name}</span>
        <span>Email: {email}</span>
      </div>

      <div className={styles.input}>
        <InputName onChange={setName} />
        <InputEmail onChange={setEmail} />
      </div>
    </div>
  );
};

export default Example1;
