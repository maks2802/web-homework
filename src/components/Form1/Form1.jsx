import { useState } from "react";
import styles from "./Form1.module.css";

const Form1 = () => {
  const [values, setValues] = useState({
    login: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("--- FORM 1 ---");
    console.log("Login: ", values.login);
    console.log("Password: ", values.password);

    setValues({
      login: "",
      password: "",
    });
  };

  return (
    <>
      <h2>Form 1</h2>
      <form onSubmit={handleSubmit} className={styles.content}>
        <div className={styles.field}>
          <label htmlFor="login">Login</label>
          <input
            type="text"
            name="login"
            value={values.login}
            onChange={handleChange}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </>
  );
};

export default Form1;
