import { Route, Routes } from "react-router-dom";
import Contacts from "./components/Contacts";
import Delivery from "./components/Delivery";
import Layout from "./components/Layout";
import NewItems from "./components/NewItems";
import Shop from "./components/Shop";
import Users from "./components/Users";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Shop />} />
        <Route path="delivery" element={<Delivery />} />
        <Route path="newitems" element={<NewItems />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="users" element={<Users />} />
        <Route path="*" element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
