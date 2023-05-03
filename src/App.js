/* eslint-disable react/jsx-pascal-case */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import Home from "./pages/Home";
import EHome from "./pages/e-commerce/Home";
import BlogDetail from "./pages/blog_detail";
import { Product_detail } from "./pages/e-commerce/Product_detail";
import Cart from "./pages/e-commerce/Cart";
import Login from "./components/auth/login";
import ForgotPassword from "./components/auth/forgot_password";
import Register from "./components/auth/register";
import Contact from "./pages/Contact";
import Error from "./components/Error";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="blog_detail" element={<BlogDetail />} />
          <Route path="contact" element={<Contact />} />
          
          <Route path="ecommerce/home" element={<EHome />} />
          <Route path="ecommerce/product_detail" element={<Product_detail />} />
          <Route path="ecommerce/cart" element={<Cart />} />
          
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot_password" element={<ForgotPassword />} />
          
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
