import { useState } from "react";
import Product from "./Product";
import "./ProductList.css";

const ProductList = () => {
  const arrProducts = [
    {
      id: 1,
      name: "Ноутбук",
      description: "Потужний ноутбук для роботи та розваг.",
      price: 25000,
    },
    {
      id: 2,
      name: "Телефон",
      description: "Смарт телефон з великим екраном.",
      price: 12000,
    },
    {
      id: 3,
      name: "Мишка",
      description: "Безпроводова мишка зі стильним дизайном.",
      price: 1000,
    },
  ];

  const [products, setProducts] = useState([]);

  const handleShowProducts = () => {
    setProducts(arrProducts);
  };

  return (
    <div className="product-list">
      <button onClick={handleShowProducts}>Товари</button>
      <div>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
