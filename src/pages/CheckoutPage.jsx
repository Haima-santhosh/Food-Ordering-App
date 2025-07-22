import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../features/cart/cartSlice';



const CheckoutPage = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({name: '',email: '',phone: '',address: '',city: '',state: '',zip: ''});

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
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

    // Save order (in-memory orlocalStorage)
    const orderData = {
      ...form,
      items: cartItems,
      totalAmount: subtotal + shippingCharge,
      paymentMethod: 'Cash on Delivery',
    };

      //store in localStorage 
  localStorage.setItem('latestOrder', JSON.stringify(orderData));

    console.log("Order Placed:", orderData);

    
    dispatch(clearCart());

    
    navigate('/order-confirmation');
  };

  

  return (
    <div className='min-h-screen bg-slate-100 py-10 px-4 container'>
      <h2 className='max-w-6xl  text-center text-4xl font-bold mb-6 border rounded-lg shadow-lg bg-white p-6 mx-auto'>
        Checkout
      </h2>

      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 border rounded-lg shadow-lg bg-white p-10'>
       
        <div className='p-6 rounded-xl'>
          <h3 className='text-xl font-semibold mb-8 text-center'>Shipping Information</h3>
          <form className='space-y-4' onSubmit={handleSubmit}>
            <input type='text' placeholder='Name' name='name' value={form.name} onChange={handleChange} className='w-full border p-3 rounded' required />
            <div className='flex gap-4'>
              <input type='email' placeholder='Email' name='email' value={form.email} onChange={handleChange} className='w-1/2 border p-3 rounded' required />
              <input type='tel' placeholder='Phone' name='phone' value={form.phone} onChange={handleChange} className='w-1/2 border p-3 rounded' required />
            </div>
            <input type='text' placeholder='Address' name='address' value={form.address} onChange={handleChange} className='w-full border p-3 rounded' required />
            <div className='flex gap-4'>
              <input type='text' placeholder='City' name='city' value={form.city} onChange={handleChange} className='w-1/3 border p-3 rounded' required />
              <input type='text' placeholder='State' name ='state' value={form.state} onChange={handleChange} className='w-1/3 border p-3 rounded' required/>
              <input type='text' placeholder='ZIP' name='zip' value={form.zip} onChange={handleChange} className='w-1/3 border p-3 rounded' required />
            </div>
            <div className='flex items-center gap-2'>
              <input type='checkbox' className='w-4 h-4' />
              <label className='text-sm'>Cash on Delivery</label>
            </div>
            <button type='submit' className='w-full mt-2 bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition'>
              Place Order
            </button>

          </form>
        </div>

      
        <div className='p-6 rounded-xl bg-white border shadow'>
          <h2 className='text-xl font-semibold mb-8 text-center'>Order Summary</h2>

          <div className='space-y-4'>
            {cartItems.map((item) => (
              <div key={item.id} className='flex justify-between items-center border-b pb-2'>
                <div className='flex items-center gap-3'>
                  <img
                    src={item.itemImage}
                    alt={item.itemName}
                    className='w-12 h-12 object-cover rounded'
                  />
                  <div>
                    <p className='text-md font-medium'>{item.itemName}</p>
                    <p className='text-md text-gray-500'>x {item.quantity}</p>
                  </div>
                </div>
      <span className='font-medium'>₹{(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}

            <div className='flex justify-between'>
              <span className='text-sm'>Subtotal :</span>
              <span className='text-sm'>₹{subtotal.toFixed(2)}</span>
            </div>

            <div className='flex justify-between'>
              <span className='text-sm'>Shipping Charge :</span>
              <span className='text-sm'>₹{shippingCharge.toFixed(2)}</span>
            </div>

            <div className='flex justify-between font-semibold text-base border-t pt-2'>
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>

            <div className='mt-6'>
              <h3 className='font-semibold mb-2'>Payment Method</h3>
              <div className='flex items-center gap-2'>
                <input type='radio' checked readOnly className='w-4 h-4' /> {/*default selection and non editable */}
                


                <label className='text-sm'>Cash on Delivery</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
