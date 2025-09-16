import ProductList from "./components/ProductList/ProductList";
import Welcome from "./components/Welcome/Welcome";
import { userInfo, productInfo } from "./data";

function App() {
  return (
    <>
      <Welcome
        name={userInfo.name}
        email={userInfo.email}
        phone={userInfo.phone}
      />
      <h1 style={{ paddingLeft: "20px" }}>Products</h1>
      <ProductList products={productInfo} />
    </>
  );
}

export default App;
