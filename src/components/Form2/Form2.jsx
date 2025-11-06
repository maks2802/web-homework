import { useState } from "react";
import "./Form2.css";

const Form2 = () => {
  const [name, setName] = useState("");
  const [language, setLanguage] = useState("JavaScript");
  const [comment, setComment] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({ name, language, comment });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="content-2">
        <label className="field-2">
          Ім’я:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Введіть ім’я"
          />
        </label>
        <label className="field-2">
          Мова програмування:
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="JavaScript">JavaScript</option>
            <option value="Python">Python</option>
            <option value="C#">C#</option>
          </select>
        </label>
        <label className="field-2">
          Коментар:
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Введіть коментар"
          />
        </label>
        <button type="submit" className="button-2">
          Надіслати
        </button>
      </form>
      {submittedData && (
        <div>
          <h3>Введені дані:</h3>
          <p>Ім’я: {submittedData.name}</p>
          <p>Мова програмування: {submittedData.language}</p>
          <p>Коментар: {submittedData.comment}</p>
        </div>
      )}
    </div>
  );
};

export default Form2;
