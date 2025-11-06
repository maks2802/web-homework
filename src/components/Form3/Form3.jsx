import { useState } from "react";
import "./Form3.css";

const Form3 = () => {
  const [name, setName] = useState("");
  const [language, setLanguage] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({ name, language });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="content-3">
        <label className="field-3">
          Ім’я:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Введіть ім’я"
          />
        </label>
        <div>
          <p>Оберіть мову програмування:</p>
          <label className="field-3">
            <input
              type="radio"
              value="JavaScript"
              checked={language === "JavaScript"}
              onChange={(e) => setLanguage(e.target.value)}
            />
            JavaScript
          </label>
          <label className="field-3">
            <input
              type="radio"
              value="Python"
              checked={language === "Python"}
              onChange={(e) => setLanguage(e.target.value)}
            />
            Python
          </label>
          <label className="field-3">
            <input
              type="radio"
              value="C#"
              checked={language === "C#"}
              onChange={(e) => setLanguage(e.target.value)}
            />
            C#
          </label>
        </div>
        <button type="submit" className="button-3">
          Надіслати
        </button>
      </form>
      {submittedData && (
        <div>
          <h3>Введені дані:</h3>
          <p>Ім’я: {submittedData.name}</p>
          <p>Мова програмування: {submittedData.language}</p>
        </div>
      )}
    </div>
  );
};

export default Form3;
