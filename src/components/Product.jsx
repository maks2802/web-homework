import "./Product.css";

const Product = ({ product }) => {
  return (
    <div className="product">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Ціна: {product.price}</p>
    </div>
  );
};

export default Product;
