import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./cart";
import Home from "./home";
import Products from "./products";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}
