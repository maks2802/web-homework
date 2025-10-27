import { useState } from "react";
import styles from "./Form4.module.css";

const Form4 = () => {
  const [name, setName] = useState("");
  const [selectedValues, setSelectedValues] = useState(null);
  const [checked, setChecked] = useState({
    javascript: false,
    java: false,
    cpp: false,
  });

  const handleChangeCheckbox = (e) => {
    setChecked((prev) => ({
      ...prev,
      [e.target.name]: e.target.checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("--- FORM 4 ---");
    console.log("Name: ", name);
    console.log("Languages: ", checked);

    setSelectedValues({ name, languages: checked });

    setName("");

    setChecked({
      javascript: false,
      java: false,
      cpp: false,
    });
  };

  return (
    <>
      <h2 className={styles.title}>Form 4</h2>
      <form onSubmit={handleSubmit} className={styles.content}>
        <div className={styles.field}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.field}>
          <label>
            <input
              type="checkbox"
              name="javascript"
              checked={checked.javascript}
              onChange={handleChangeCheckbox}
            />
            Javascript
          </label>
          <label>
            <input
              type="checkbox"
              name="java"
              checked={checked.java}
              onChange={handleChangeCheckbox}
            />
            Java
          </label>
          <label>
            <input
              type="checkbox"
              name="cpp"
              checked={checked.cpp}
              onChange={handleChangeCheckbox}
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
            Your language(s):{" "}
            <strong>
              {Object.entries(selectedValues.languages)
                .filter(([, isChecked]) => isChecked)
                .map(([lang]) => lang)
                .join(", ")}
            </strong>
          </p>
        </div>
      )}
    </>
  );
};

export default Form4;
