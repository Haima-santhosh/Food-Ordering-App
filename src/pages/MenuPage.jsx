import React, { useEffect, useState } from "react";
import { fetchmenu } from "../api/menuData";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const MenuPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [restaurent, setRestaurent] = useState(null);
  const [filter, setFilter] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    (async () => {
      const data = await fetchmenu();
      const selectedMenu = data.find((item) => item.id === id);
      setRestaurent(selectedMenu);
    })();
  }, [id]);

  const filteredItems =
    restaurent?.menu
      ?.filter((item) =>
        item.itemName.toLowerCase().includes(query.toLowerCase()),
      )
      ?.sort((a, b) => {
        if (filter === "rating") return b.rating - a.rating;
        if (filter === "price") return a.price - b.price;
        return 0;
      }) || [];

  if (!restaurent) {
    return (
      <div className="flex justify-center items-center min-h-screen text-3xl font-bold text-red-500">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-white dark:bg-slate-900 px-4 sm:px-6 md:px-10 py-10 text-gray-900 dark:text-white transition-colors duration-300">
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-10 bg-slate-100 dark:bg-slate-800 p-6 rounded shadow">
        <span className="text-blue-600 dark:text-blue-400">
          {restaurent.RestaurentName}
        </span>{" "}
        - Menu
      </h1>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        <div className="w-full md:w-1/3">
          <select
            onChange={(e) => setFilter(e.target.value)}
            className="w-full h-12 border dark:border-slate-700 rounded-lg px-3 bg-gray-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Sort By</option>
            <option value="rating">Top Rated</option>
            <option value="price">Low Price</option>
          </select>
        </div>

        <div className="w-full md:w-2/3 lg:w-1/2 relative">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search your favourite food..."
            className="w-full h-12 px-10 border dark:border-slate-700 rounded-lg bg-gray-50 dark:bg-slate-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <svg
            className="absolute top-1/2 left-3 transform -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-300"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
      </div>

      <div className="text-center mt-5 mb-10">
        <Link
          to="/restaurants"
          className="inline-flex items-center bg-blue-600 hover:bg-blue-800 text-white px-6 py-3 rounded-lg text-base sm:text-lg font-semibold shadow"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Restaurants
        </Link>
      </div>

      <div className="max-w-7xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredItems.map((item) => (
          <div
            key={item.itemId}
            className="relative bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl shadow hover:shadow-lg transition-transform duration-300 hover:scale-[1.02] p-4 flex flex-col h-full"
          >
            <div className="absolute top-2 right-2 flex flex-col items-end gap-1">
              {item.discountBadge && (
                <span className="bg-red-100 text-red-700 px-2 py-1 text-xs rounded font-semibold">
                  🔥 {item.discountBadge}
                </span>
              )}
              {item.dietary && (
                <span
                  className={`text-xs px-2 py-1 rounded font-semibold ${
                    item.dietary.toLowerCase() === "veg"
                      ? "bg-green-200 text-green-800"
                      : "bg-red-200 text-red-800"
                  }`}
                >
                  {item.dietary.toLowerCase() === "veg"
                    ? "🟢 Veg"
                    : "🔴 Non-Veg"}
                </span>
              )}
            </div>

            <img
              src={item.itemImage}
              alt={item.itemName}
              className="h-44 w-full object-cover rounded-lg mb-4"
            />

            <div className="text-center">
              <h3 className="text-lg font-semibold">{item.itemName}</h3>
              <p className="text-green-600 font-bold mt-1">₹{item.price}</p>
              <p className="text-yellow-500 text-sm">⭐ {item.rating}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                {item.cuisineType} • {item.category}
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mt-4">
              <button
                onClick={() => {
                  dispatch(addToCart(item));
                  navigate("/cart");
                }}
                className="px-4 py-2 text-sm rounded shadow text-white bg-green-500 hover:bg-green-600
               w-auto min-w-[120px] max-w-[160px] sm:max-w-none"
              >
                Add to Cart
              </button>

              <button
                onClick={() =>
                  navigate(`/restaurants/${id}/menu/${item.itemId}`)
                }
                className="px-4 py-2 text-sm rounded shadow text-white bg-yellow-500 hover:bg-yellow-600
               w-auto min-w-[120px] max-w-[160px] sm:max-w-none"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
