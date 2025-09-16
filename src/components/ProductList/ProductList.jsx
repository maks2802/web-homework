import ProductBlock from "../ProductBlock/ProductBlock";
import styles from "./ProductList.module.css";

const ProductList = ({ products }) => {
  return (
    <ul className={styles.list}>
      {products.map((product, id) => (
        <li key={id}>
          <ProductBlock product={product} />
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
