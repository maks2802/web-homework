import PropTypes from "prop-types";
import Product from "./Product";
import styles from "./Product.module.css";

const ProductList = ({ products }) => {
  return (
    <div>
      <h2 className={styles.title}>Product List</h2>
      {products.map((item) => (
        <Product
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          inStock={item.inStock}
        />
      ))}
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inStock: PropTypes.bool.isRequired,
    })
  ),
};

ProductList.defaultProps = {
  products: [],
};

export default ProductList;
