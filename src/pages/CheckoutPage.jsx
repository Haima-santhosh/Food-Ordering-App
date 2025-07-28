import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { clearCart } from "../features/cart/cartSlice"
import { ArrowLeft } from "lucide-react"

const CheckoutPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [form, setForm] = useState({name: "",email: "",phone: "",address: "",city: "",state: "",zip: "",});

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shippingCharge = 25;
  const total = subtotal + shippingCharge;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      alert("Your cart is empty. Please add items before placing an order.");
      return;
    }

    const orderData = {
      ...form,
      items: cartItems,
      totalAmount: total,
      paymentMethod: "Cash on Delivery",
    };

    localStorage.setItem("latestOrder", JSON.stringify(orderData));
    dispatch(clearCart());
    navigate("/order-confirmation");
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-gray-900 py-10 px-4">
      <h2 className="max-w-6xl text-center text-4xl font-bold mb-6 border rounded-lg shadow-lg bg-white dark:bg-gray-800 dark:text-white p-6 mx-auto">
        Checkout
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 border rounded-lg shadow-lg bg-white dark:bg-gray-800 p-10">
        <div className="p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-8 text-center dark:text-white">
            Shipping Information
          </h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input type="text" placeholder="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border dark:border-gray-600 p-3 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              required
            />
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-1/2 border dark:border-gray-600 p-3 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                required
              />
              <input
                type="tel"
                placeholder="Phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-1/2 border dark:border-gray-600 p-3 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Address"
              name="address"
              value={form.address}
              onChange={handleChange}
              className="w-full border dark:border-gray-600 p-3 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              required
            />
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="City"
                name="city"
                value={form.city}
                onChange={handleChange}
                className="w-1/3 border dark:border-gray-600 p-3 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                required
              />
              <input
                type="text"
                placeholder="State"
                name="state"
                value={form.state}
                onChange={handleChange}
                className="w-1/3 border dark:border-gray-600 p-3 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                required
              />
              <input
                type="text"
                placeholder="ZIP"
                name="zip"
                value={form.zip}
                onChange={handleChange}
                className="w-1/3 border dark:border-gray-600 p-3 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full mt-2 bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition"
            >
              Place Order
            </button>
          </form>
        </div>

        <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border dark:border-gray-700 shadow">
          <h2 className="text-xl font-semibold mb-8 text-center dark:text-white">
            Order Summary
          </h2>
          <div className="space-y-4">
            {cartItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="flex justify-between items-center border-b pb-2 dark:border-gray-700"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.itemImage}
                    alt={item.itemName}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div>
                    <p className="text-md font-medium dark:text-white">
                      {item.itemName}
                    </p>
                    <p className="text-md text-gray-500 dark:text-gray-300">
                      x {item.quantity}
                    </p>
                  </div>
                </div>
                <span className="font-medium dark:text-white">
                  ₹{(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}

            <div className="flex justify-between text-sm dark:text-gray-300">
              <span>Subtotal :</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm dark:text-gray-300">
              <span>Shipping Charge :</span>
              <span>₹{shippingCharge.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold text-base border-t pt-2 dark:text-white dark:border-gray-700">
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
            <div className="mt-6">
              <h3 className="font-semibold mb-2 dark:text-white">
                Payment Method
              </h3>
              <div className="flex items-center gap-2">
                <input type="radio" checked readOnly className="w-4 h-4" />
                <label className="text-sm dark:text-gray-300">
                  Cash on Delivery
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <Link
          to="/restaurants"
          className="inline-flex items-center text-white bg-blue-600 hover:bg-blue-800 border rounded-lg shadow-lg px-6 py-3 font-bold mb-8 text-2xl mt-8"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Restaurants
        </Link>
      </div>
    </div>
  )
}

export default CheckoutPage
