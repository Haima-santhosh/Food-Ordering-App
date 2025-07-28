import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { fetchmenuDetails } from "../api/menuData"
import { useDispatch } from "react-redux"
import { addToCart } from "../features/cart/cartSlice"

const MenuItemDetails = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { id, itemId } = useParams()
  const [menuItem, setMenuItem] = useState(null)

  useEffect(() => {
    const getDetails = async () => {
      const data = await fetchmenuDetails(id, itemId)
      setMenuItem(data)
    };
    if (id && itemId) getDetails()
  }, [id, itemId])

  if (!menuItem)
    return (
      <div className="min-h-screen flex justify-center items-center text-xl text-red-700 font-semibold mt-20">
        Loading...
      </div>
    );

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 py-10 px-4 sm:px-6 md:px-10 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-6xl mx-auto bg-gray-50 dark:bg-slate-800 rounded-xl shadow-md p-6 sm:p-10">
        <h2 className="text-3xl font-bold text-center mb-10 border-b border-gray-300 dark:border-slate-600 pb-4">
          Explore Your Favourite Dish
        </h2>

        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2 flex justify-center">
            <img
              src={menuItem.itemImage}
              alt={menuItem.itemName}
              className="w-72 h-72 object-cover border border-gray-200 dark:border-slate-600 rounded-lg shadow"
            />
          </div>

          <div className="md:w-1/2 text-center md:text-left space-y-4">
            <h3 className="text-2xl font-semibold">{menuItem.itemName}</h3>
            <p className="text-gray-700 dark:text-gray-300">
              {menuItem.itemDescription}
            </p>
            <p className="text-xl text-green-600 font-semibold">
              ₹{menuItem.price}
            </p>
            <p className="text-yellow-500 text-sm">⭐ {menuItem.rating}</p>

            {menuItem.discountBadge && (
              <p className="text-red-500 font-semibold text-sm">
                🔥 {menuItem.discountBadge}
              </p>
            )}
            {menuItem.dietary && (
              <p
                className={`text-sm font-medium ${
                  menuItem.dietary.toLowerCase() === "veg"
                    ? "text-green-700"
                    : "text-red-700"
                }`}
              >
                {menuItem.dietary.toLowerCase() === "veg"
                  ? "🟢 Pure Veg"
                  : "🔴 Non-Veg"}
              </p>
            )}
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {menuItem.cuisineType} • {menuItem.category}
            </p>

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
      </div>
    </div>
  )
}

export default MenuItemDetails
