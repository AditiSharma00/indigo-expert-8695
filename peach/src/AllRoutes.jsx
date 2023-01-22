import { Routes, Route } from "react-router-dom";

import React from "react";
import LandingPage from "./Pages/LandingPage/Landing";
import Products from "./Pages/Products";
import Signup from "./Pages/Signup";
import Admin from "./Pages/Admin";
import Checkout from "./Pages/Checkout";
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/signin" element={<Signup />} />
        <Route path="admin" element={<Admin />} />
        <Route path="checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
