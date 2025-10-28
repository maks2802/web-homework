import "./ProductBlock.css";

const ProductBlock = (props) => {
  return (
    <div className="product_block">
      <img src={props.image} alt={props.name} className="product_image" />
      <h2>{props.name}</h2>
      <p>Price: ${props.price}</p>
    </div>
  );
};

export default ProductBlock;
