import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./Component/Products";
import Product from "./Component/Product";
import Cart from "./Component/Cart";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Login from "./Component/buttons/Login";
import SignUp from "./Component/buttons/SignUp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="cart" element={<Cart />} />
          <Route path="products/:id" element={<Product />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
