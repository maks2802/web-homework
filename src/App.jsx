import { useState } from "react";
import Product from "./components/Product";
import ProductList from "./components/ProductList";

function App() {
  const [products] = useState([
    { id: 1, name: "Laptop", price: 999.99, inStock: true },
    { id: 2, name: "Smartphone", price: 599.99, inStock: false },
    { id: 3, name: "Tablet", price: 349.99, inStock: true },
  ]);

  return (
    <div>
      <Product id={1} name="Laptop" price={999.99} inStock={true} />
      <ProductList products={products} />
    </div>
  );
}

export default App;
