import styles from "./Product.module.css";

const Product = ({ product }) => {
  return (
    <div className={styles.container}>
      <h3>Name: {product.name}</h3>
      <p>Description: {product.description}</p>
      <p>Price: {product.price}</p>
    </div>
  );
};

export default Product;
