import { useState } from "react";
import { productInfo } from "../../data";
import Product from "../Product/Product";
import styles from "./ProductList.module.css";

const ProductList = () => {
  const [items, setItems] = useState([]);

  const loadProducts = () => {
    setItems(productInfo);
  };

  return (
    <div className={styles.container}>
      <button onClick={loadProducts} disabled={items.length > 0}>
        Download products
      </button>
      <h2>Products</h2>
      <ul className={styles.list}>
        {items.map((product) => (
          <li key={product.id}>
            <Product product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
