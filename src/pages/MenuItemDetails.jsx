import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchmenuDetails } from "../api/menuData";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const MenuItemDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id, itemId } = useParams();
  const [menuItem, setMenuItem] = useState(null);

  useEffect(() => {
    const getDetails = async () => {
      const data = await fetchmenuDetails(id, itemId);
      setMenuItem(data);
    };
    if (id && itemId) getDetails();
  }, [id, itemId]);

  if (!menuItem)
    return (
      <div className="min-h-screen flex justify-center items-center text-xl text-red-700 font-semibold mt-20">
        Loading...
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 md:px-10">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-6 sm:p-10">
       
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10 border-b pb-4">
          Explore Your Favourite Dish
        </h2>

       
        <div className="flex flex-col md:flex-row gap-10 items-center">
         
          <div className="md:w-1/2 flex justify-center">
            <img
              src={menuItem.itemImage}
              alt={menuItem.itemName}
              className="w-72 h-72 object-cover border border-gray-200 rounded-lg shadow"
            />
          </div>

         
          <div className="md:w-1/2 text-center md:text-left space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800">{menuItem.itemName}</h3>
            <p className="text-gray-600">{menuItem.itemDescription}</p>
            <p className="text-xl text-green-600 font-semibold">₹{menuItem.price}</p>
            <p className="text-yellow-500 text-sm">⭐ {menuItem.rating}</p>

           
            <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
              <button
                onClick={() => {
                  dispatch(addToCart(menuItem));
                  navigate("/cart");
                }}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition"
              >
                Add to Cart
              </button>
              <button
                onClick={() => navigate(-1)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition"
              >
                Back to Menu
              </button>
            </div>
          </div>
        </div>

       
        <div className="mt-12 text-center">
          <button
            onClick={() => navigate(-2)}
            className="text-white bg-gray-700 hover:bg-gray-800 px-6 py-3 rounded-lg transition"
          >
            ← Back to Restaurants
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItemDetails;
