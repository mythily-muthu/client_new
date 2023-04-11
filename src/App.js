import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './App.css';
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import AdminProductList from "./pages/admin/productList/ProductList";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { useSelector } from "react-redux";
import NewProduct from "./pages/admin/newProduct/NewProduct";
import EditProduct from "./pages/admin/editProduct/EditProduct";

function App() {
  const user = useSelector((state) => state.user.currentUser)
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {user?.isAdmin && <Route path="/admin/productlist" element={<AdminProductList />} />}
        {user?.isAdmin && <Route path="/newproduct" element={<NewProduct />} />}
        {user?.isAdmin && <Route path="/editproduct/:id" element={<EditProduct />} />}

      </Routes>
    </Router>
  );
}

export default App;
