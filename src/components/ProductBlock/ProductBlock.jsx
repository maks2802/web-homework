import styles from "./ProductBlock.module.css";

const ProductBlock = ({ product }) => {
  return (
    <div className={styles.container}>
      <img src={product.img} alt="Product" />
      <h3>{product.title}</h3>
      <p>{product.price}</p>
    </div>
  );
};

export default ProductBlock;
