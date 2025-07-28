import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {increaseQuantity,decreaseQuantity,clearCart,} from "../features/cart/cartSlice";

import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <div className="bg-gray-100 dark:bg-slate-900 p-6 min-h-screen">
      <h1 className="text-4xl font-bold text-center border rounded-lg shadow-lg p-8 bg-white dark:bg-slate-800 text-gray-900 dark:text-white mt-8 mb-14 max-w-6xl mx-auto">
        Your Shopping Cart
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-4">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center space-y-4">
              <p className="text-gray-800 dark:text-gray-200">
                Your cart is empty.
              </p>
              <img
                src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png"
                alt="Empty cart"
                className="w-56 h-56 object-contain"
              />
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.itemId}
                className="flex items-center border p-4 rounded-lg mb-4 shadow-sm bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
              >
                <img
                  src={item.itemImage}
                  alt={item.itemName}
                  className="w-24 h-24 object-cover rounded mr-4"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{item.itemName}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    ₹{item.price}
                  </p>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => dispatch(decreaseQuantity(item.id))}
                      className="px-3 py-1 bg-gray-200 dark:bg-slate-700 text-gray-800 dark:text-white rounded hover:bg-gray-300 dark:hover:bg-slate-600"
                    >
                      −
                    </button>
                    <span className="px-3">{item.quantity}</span>
                    <button
                      onClick={() => dispatch(increaseQuantity(item.id))}
                      className="px-3 py-1 bg-gray-200 dark:bg-slate-700 text-gray-800 dark:text-white rounded hover:bg-gray-300 dark:hover:bg-slate-600"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}

          {cartItems.length > 0 && (
            <div className="w-full flex justify-center mt-4">
              <button
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-red-600"
                onClick={() => dispatch(clearCart())}
              >
                Clear Cart
              </button>
            </div>
          )}
        </div>

        <div className="bg-white dark:bg-slate-800 text-gray-900 dark:text-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
          <div className="flex justify-between mb-2">
            <span>Sub Total</span>
            <span>{totalPrice.toFixed(2)} Rs.</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping Charge</span>
            <span>25.00 Rs</span>
          </div>
          <hr className="my-2 border-gray-300 dark:border-gray-600" />
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>{totalPrice + 25} Rs.</span>
          </div>

          <button
            onClick={() => navigate("/checkout")}
            className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Checkout
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center gap-4 mt-8 mb-8">
        <div className="w-fit">
          <button
            onClick={() => navigate("/restaurants")}
            className="p-4 text-md bg-blue-700 text-white rounded-md shadow-md hover:bg-blue-600"
          >
            Browse Restaurants
          </button>
        </div>

        <div className="w-fit">
          <button
            onClick={() => navigate("/")}
            className="p-4 text-md bg-blue-700 text-white rounded-md shadow-md hover:bg-blue-600"
          >
            Go back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
