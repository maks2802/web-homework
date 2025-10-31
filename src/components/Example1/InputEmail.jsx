const InputEmail = ({ onChange }) => {
  return (
    <form>
      <label>Enter Email: </label>
      <input
        type="text"
        onChange={(e) => onChange(e.target.value)}
        placeholder="Email"
      />
    </form>
  );
};

export default InputEmail;
