import React from 'react'
import { Link } from 'react-router-dom'




const OrderConfirmationPage = () => {
const order = JSON.parse(localStorage.getItem('latestOrder'));

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center px-4">
      <div className="bg-white max-w-2xl w-full p-8 rounded-xl shadow-lg text-center">
        <div className="text-green-600 mb-4">

          
          <svg
            className="w-16 h-16 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>




        </div>

        <h2 className="text-3xl font-bold mb-2">Order Confirmed!</h2>
        <p className="text-gray-600 mb-6">
          Thank you <span className="font-semibold">{order?.name || 'customerName'}</span>! <br />
          Your order has been successfully placed.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg shadow-inner mb-6 text-left">
          <h3 className="text-lg font-semibold mb-2">Shipping Details</h3>
          <p><strong>Address:</strong> {order?.address}, {order?.city}, {order?.state} - {order?.zip}</p>
          <p><strong>Email:</strong> {order?.email}</p>
          <p><strong>Phone:</strong> {order?.phone}</p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-inner mb-6 text-left">
          <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
          {order?.items && order.items.length > 0 ? (
            <ul className="space-y-2">
  {order.items.map((item, index) => (
    <li key={index} className="flex justify-between">
      <span>{item.itemName} x {item.quantity}</span>
      <span>₹{(item.price * item.quantity).toFixed(2)}</span>
    </li>
  ))}

  
  <li className="flex justify-between pt-2 mt-2 font-medium">
    <span>Subtotal:</span>
    <span>₹{order.items.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}</span>
  </li>

  
  <li className="flex justify-between font-medium">
    <span>Shipping Charge:</span>
    <span>₹25.00</span>
  </li>

  
  <li className="flex justify-between border-t pt-2 mt-2 font-semibold text-lg">
    <span>Total:</span>
    <span>₹{order?.totalAmount.toFixed(2)}</span>
  </li>
</ul>
          ) : (
            <p>No items found.</p>
          )}
        </div>

        <Link
          to="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  )
}

export default OrderConfirmationPage