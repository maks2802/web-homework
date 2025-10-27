import { useState } from "react";
import styles from "./Form3.module.css";

const Form3 = () => {
  const [values, setValues] = useState({
    name: "",
    language: "",
  });
  const [selectedValues, setSelectedValues] = useState(null);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("--- FORM 3 ---");
    console.log("Name: ", values.name);
    console.log("Language: ", values.language);

    setSelectedValues(values);

    setValues({
      name: "",
      language: "",
    });
  };

  return (
    <>
      <h2 className={styles.title}>Form 3</h2>
      <form onSubmit={handleSubmit} className={styles.content}>
        <div className={styles.field}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
        </div>
        <div className={styles.field}>
          <label>
            <input
              type="radio"
              name="language"
              value="js"
              checked={values.language === "js"}
              onChange={handleChange}
            />
            Javascript
          </label>
          <label>
            <input
              type="radio"
              name="language"
              value="java"
              checked={values.language === "java"}
              onChange={handleChange}
            />
            Java
          </label>
          <label>
            <input
              type="radio"
              name="language"
              value="cpp"
              checked={values.language === "cpp"}
              onChange={handleChange}
            />
            C++
          </label>
        </div>
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
      {selectedValues !== null && (
        <div>
          <p>
            Your name: <strong>{selectedValues.name}</strong>
          </p>
          <p>
            Your language: <strong>{selectedValues.language}</strong>
          </p>
        </div>
      )}
    </>
  );
};

export default Form3;
