import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increaseQuantity, decreaseQuantity} from '../features/cart/cartSlice';
import { useNavigate } from 'react-router-dom';




const CartPage = () => {
   const navigate = useNavigate();
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center border rounded-lg shadow-lg p-8 bg-white mt-8 mb-14"> Your Shopping Cart</h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-4">
          {cartItems.length === 0 ? (
    <p>Your cart is empty.</p>
  ) : (
    cartItems.map((item) => (
      <div key={item.itemId} className="flex items-center border p-4 rounded-lg mb-4 shadow-sm">
        <img src={item.itemImage} alt={item.itemName} className="w-24 h-24 object-cover rounded mr-4" />
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{item.itemName}</h3>
          <p className="text-gray-600 mb-2">₹{item.price}</p>
          <div className="flex items-center gap-2">
  <button
    onClick={() => dispatch(decreaseQuantity(item.id))}
    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
  >
    −
  </button>
  <span className="px-3">{item.quantity}</span>
  <button
    onClick={() => dispatch(increaseQuantity(item.id))}
    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
  >
    +
  </button>
</div>
        </div>
      </div>
    ))
  )}
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
          <div className="flex justify-between mb-2">
            <span>Sub Total</span>
            <span>{totalPrice.toFixed(2)}Rs.</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping Charge</span>
            <span>25.00 Rs</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>{(totalPrice + 25)}Rs.</span>
          </div>
          <button onClick={()=>
            {
              navigate('/checkout')
            }
          }
          className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Checkout
          </button>
        </div>


       
      </div>

      <div className='flex justify-center items-center gap-4 mt-8'>

  <div className="w-fit">
  <button
    onClick={() => navigate(-2)}
    className="p-4 text-md  bg-blue-700 text-white rounded-md shadow-md hover:bg-blue-600"
  >
    Go back to Restaurants
  </button>
</div>

     <div className="w-fit">
  <button
    onClick={() => navigate(-1)}
    className="p-4 text-md  bg-blue-700 text-white rounded-md shadow-md hover:bg-blue-600"
  >
    Go back to Menu
  </button>
</div>

</div>

      
    </div>

    
  )
}

export default CartPage
