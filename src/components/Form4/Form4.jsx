import { useState } from "react";
import "./Form4.css";

const Form4 = () => {
  const [name, setName] = useState("");
  const [languages, setLanguages] = useState([]);
  const [submittedData, setSubmittedData] = useState(null);

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    if (languages.includes(value)) {
      setLanguages(languages.filter((lang) => lang !== value));
    } else {
      setLanguages([...languages, value]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({ name, languages });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="content-4">
        <label className="field-4">
          Ім’я:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Введіть ім’я"
          />
        </label>
        <div>
          <p>Оберіть мови програмування:</p>
          <label className="field-4">
            <input
              type="checkbox"
              value="JavaScript"
              checked={languages.includes("JavaScript")}
              onChange={handleCheckboxChange}
            />
            JavaScript
          </label>
          <label className="field-4">
            <input
              type="checkbox"
              value="Python"
              checked={languages.includes("Python")}
              onChange={handleCheckboxChange}
            />
            Python
          </label>
          <label className="field-4">
            <input
              type="checkbox"
              value="C#"
              checked={languages.includes("C#")}
              onChange={handleCheckboxChange}
            />
            C#
          </label>
        </div>
        <button type="submit" className="button-4">
          Надіслати
        </button>
      </form>
      {submittedData && (
        <div>
          <h3>Введені дані:</h3>
          <p>Ім’я: {submittedData.name}</p>
          <p>
            Мови програмування:{" "}
            {submittedData.languages.length > 0 &&
              submittedData.languages.join(", ")}
          </p>
        </div>
      )}
    </div>
  );
};

export default Form4;
