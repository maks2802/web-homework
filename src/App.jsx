import ProductList from "./components/ProductList";
import Welcome from "./components/Welcome";

function App() {
  const user = {
    name: "John Smith",
    email: "john123@gmail.com",
    phone: "+380677899990",
  };

  return (
    <div>
      <Welcome name={user.name} email={user.email} phone={user.phone} />
      <h1>Products</h1>
      <ProductList />
    </div>
  );
}

export default App;
