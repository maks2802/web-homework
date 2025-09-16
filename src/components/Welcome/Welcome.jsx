import styles from "./Welcome.module.css";

const Welcome = ({ name, email, phone }) => {
  return (
    <div className={styles.container}>
      <h2>WELCOME!</h2>
      <p>Name: {name}</p>
      <p>
        Email: <a href={`mailto:${email}`}>{email}</a>
      </p>
      <p>
        Phone: +<a href={`tel:${phone}`}>{phone}</a>
      </p>
    </div>
  );
};

export default Welcome;
