const MyInput = ({ type, onChange, label, placeholder }) => {
  return (
    <form>
      <label>{label}</label>
      <input
        type={type}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </form>
  );
};

export default MyInput;
