import React from "react";

import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import MenuPage from "./pages/MenuPage";
import MenuItemDetails from "./pages/MenuItemDetails";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import AdminMenuItemsPage from "./pages/AdminMenuItemsPage";
import AdminOrdersPage from "./pages/AdminOrdersPage";
import AdminUsersPage from "./pages/AdminUsersPage";
import UserSideLayout from "./layout/UserSideLayout";
import AdminSideLayout from "./layout/AdminSideLayout";


function App() {
  return (


    <Routes>

       <Route path="/login" element={<LoginPage />} />
       <Route path="/signup" element={<SignUpPage />} />


      <Route path="/" element={<UserSideLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="menu" element={<MenuPage />} />
        <Route path="menu/:menuId" element={<MenuItemDetails />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="order-confirmation" element={<OrderConfirmationPage />} />
      </Route>
      

    <Route path="/admin" element={<AdminLoginPage />} />

    <Route path="/admin-dashboard" element={<AdminSideLayout />} >
    <Route index element={<AdminDashboardPage />} />
    <Route path="menu-items" element={<AdminMenuItemsPage />} />
    <Route path="orders" element={<AdminOrdersPage />} />
    <Route path="users" element={<AdminUsersPage />} />
    </Route>



    </Routes>



  );
}

export default App;
