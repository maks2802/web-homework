import "./Welcome.css";

const Welcome = (props) => {
  return (
    <div className="welcome_container">
      <p>Name: {props.name}</p>
      <p>Email: {props.email}</p>
      <p>Phone: {props.phone}</p>
    </div>
  );
};

export default Welcome;
