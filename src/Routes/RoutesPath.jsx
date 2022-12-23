import React from "react";
import { Routes, Route } from "react-router-dom";
import { RequiresAuth } from "./RequiresAuth";
import HomePage from "../pages/HomePage/HomePage";
import Productlisting from "../pages/Productlisting/productlisting";
import Login from "../pages/AuthPages/Login";
import SignUp from "../pages/AuthPages/SignUp";
import Mockman from "mockman-js";
import CartPage from "../pages/CartPage/cartPage";
import Wishlist from "../pages/Wishlist/wishlist";
import InvalidPage from "../pages/InvalidPage/invalidPage";

export default function RoutesPath() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<Productlisting />} />
      <Route path="/mock" element={<Mockman />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="*" element={<InvalidPage />} />

      <Route
        path="/wishlist"
        element={
          <RequiresAuth>
            <Wishlist />
          </RequiresAuth>
        }
      />

      <Route
        path="/cart"
        element={
          <RequiresAuth>
            <CartPage />
          </RequiresAuth>
        }
      />
    </Routes>
  );
}
