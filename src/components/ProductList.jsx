import ProductBlock from "./ProductBlock";
import "./ProductList.css";

const ProductList = () => {
  return (
    <div className="product-list">
      <ProductBlock name="Orange" price={5} image="/src/img/product1.jpg" />
      <ProductBlock name="Apple" price={7} image="/src/img/product2.jpg" />
      <ProductBlock
        name="Watermelon"
        price={10}
        image="/src/img/product3.jpg"
      />
    </div>
  );
};

export default ProductList;
