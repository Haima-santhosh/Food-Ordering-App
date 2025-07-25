import React from "react";

import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";
import UserSideLayout from "./layout/UserSideLayout";

import '@fortawesome/fontawesome-free/css/all.min.css';
import RestaurentPage from "./pages/RestaurentPage";
import MenuPage from "./pages/MenuPage";
import MenuItemDetails from "./pages/MenuItemDetails";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import UserProfilePage from "./pages/UserProfilePage";
import { ToggleThemeProvider } from "./Context/ToggleThemeContext";


import AdminSideLayout from "./layout/AdminSideLayout";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import AdminOrdersPage from "./pages/AdminOrdersPage";
import AdminUsersPage from "./pages/AdminUsersPage";
import AdminProductsPage from "./pages/AdminProductsPage";




function App() {
  return (


    <Routes>

      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />


      <Route path="/" element={<UserSideLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="restaurants" element={<RestaurentPage />} />
        <Route path="restaurants/:id/menu" element={<MenuPage />} />
        <Route path="restaurants/:id/menu/:itemId" element={<MenuItemDetails />} />

        <Route path="contact" element={<ContactPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="order-confirmation" element={<OrderConfirmationPage />} />
        <Route path="profile" element={<UserProfilePage />} />

      </Route>




      <Route path="/admin" element={<AdminSideLayout />} >
        <Route index element={<AdminDashboardPage />} />
        <Route path="products" element={<AdminProductsPage />} />
        <Route path="orders" element={<AdminOrdersPage />} />
        <Route path="users" element={<AdminUsersPage />} />
      </Route>



    </Routes>



  );
}

export default App;
