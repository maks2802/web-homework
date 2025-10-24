import Book from "./components/Book/Book";
import Calculator from "./components/Calculator/Calculator";
import ProductList from "./components/ProductList/ProductList";
import { book1 } from "./data";

function App() {
  return (
    <>
      <Calculator />
      <Book name={book1.name} author={book1.author} price={book1.price} />
      <ProductList />
    </>
  );
}

export default App;
