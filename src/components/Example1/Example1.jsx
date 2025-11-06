import { useState } from "react";
import InputName from "./InputName";
import InputEmail from "./InputEmail";
import "../Example.css";

const Example1 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <h2 className="title">Example 1</h2>
      <div className="input">
        <span>Name: {name}</span>
        <span>Email: {email}</span>
      </div>

      <div className="input">
        <InputName onChange={setName} />
        <InputEmail onChange={setEmail} />
      </div>
    </div>
  );
};

export default Example1;
