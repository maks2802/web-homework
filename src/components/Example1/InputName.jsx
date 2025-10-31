const InputName = ({ onChange }) => {
  return (
    <form>
      <label>Enter Name: </label>
      <input
        type="text"
        onChange={(e) => onChange(e.target.value)}
        placeholder="Name"
      />
    </form>
  );
};

export default InputName;
