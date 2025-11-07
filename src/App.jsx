import Product from "./components/Product";
import ProductList from "./components/ProductList";
import { product1, product2, productList } from "./data";

function App() {
  return (
    <>
      <Product
        id={product1.id}
        name={product1.name}
        price={product1.price}
        inStock={product1.inStock}
      />
      <Product
        id={product2.id}
        name={product2.name}
        price={product2.price}
        inStock={product2.inStock}
      />
      <ProductList products={productList} />
    </>
  );
}

export default App;
