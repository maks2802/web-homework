import PropTypes from "prop-types";
import "./styles.css";

const Product = ({ id, name, price, inStock }) => {
  return (
    <div className="container">
      <h3 className="title">Product ID: {id}</h3>
      <p>Name: {name}</p>
      <p>Price: ${price}</p>
      <p>{inStock ? "В наявності" : "Товару немає"}</p>
    </div>
  );
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  inStock: PropTypes.bool.isRequired,
};

export default Product;
