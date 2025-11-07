import PropTypes from "prop-types";
import styles from "./Product.module.css";

const Product = ({ id, name, price, inStock }) => {
  return (
    <div className={styles.container}>
      <p>ID: {id}</p>
      <p>Name: {name}</p>
      <p>Price: {price}</p>
      {inStock ? (
        <p className={styles.inStock}>In Stock</p>
      ) : (
        <p className={styles.outStock}>Out of Stock</p>
      )}
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
