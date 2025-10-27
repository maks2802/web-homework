import { useState } from "react";
import styles from "./Form2.module.css";

const Form2 = () => {
  const [values, setValues] = useState({
    name: "",
    language: "",
    comment: "",
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
    console.log("--- FORM 2 ---");
    console.log("Name: ", values.name);
    console.log("Language: ", values.language);
    console.log("Comment: ", values.comment);

    setSelectedValues(values);

    setValues({
      name: "",
      language: "",
      comment: "",
    });
  };

  return (
    <>
      <h2 className={styles.title}>Form 2</h2>
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
          <label htmlFor="language">Language</label>
          <select
            id="language"
            name="language"
            value={values.language}
            onChange={handleChange}
            className={styles.field}
          >
            <option value="" disabled></option>
            <option value="js">JavaScript</option>
            <option value="java">Java</option>
            <option value="cpp">C++</option>
          </select>
        </div>
        <div className={styles.field}>
          <label htmlFor="comment">Comment</label>
          <textarea
            name="comment"
            value={values.comment}
            onChange={handleChange}
          />
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
          <p>
            Your comment: <strong>{selectedValues.comment}</strong>
          </p>
        </div>
      )}
    </>
  );
};

export default Form2;
