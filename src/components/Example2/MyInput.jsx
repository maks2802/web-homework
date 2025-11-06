const MyInput = ({ type, onChange, label }) => {
  return (
    <form>
      <label>{label}</label>
      <input type={type} onChange={(e) => onChange(e.target.value)} />
    </form>
  );
};

export default MyInput;
