import React, { useEffect, useState } from 'react';
import { fetchmenu } from '../api/menuData';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

const MenuPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [restaurent, setRestaurent] = useState(null);
  const [filter, setFilter] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    (async () => {
      const data = await fetchmenu();
      const selectedMenu = data.find(item => item.id === id);
      setRestaurent(selectedMenu);
    })();
  }, [id]);

  const handleSearch = (e) => e.preventDefault();

  const filteredItems = restaurent?.menu
    ?.filter(item => item.itemName.toLowerCase().includes(query.toLowerCase()))
    ?.sort((a, b) => {
      if (filter === 'rating') return b.rating - a.rating;
      if (filter === 'price') return a.price - b.price;
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
    <div className="min-h-screen w-full bg-white px-4 sm:px-6 md:px-10 py-10">
      <h1 className="text-center text-4xl font-bold mb-10 bg-slate-100 p-6 rounded shadow">
        <span className="text-blue-600">{restaurent.RestaurentName}</span> - Menu
      </h1>

      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
        {/* Filter Dropdown */}
        <select
          onChange={(e) => setFilter(e.target.value)}
          className="w-full md:w-1/3 h-12 border rounded-lg px-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Sort By</option>
          <option value="rating">Top Rated</option>
          <option value="price">Low Price</option>
        </select>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="w-full md:w-2/3 relative">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search your favourite food..."
            className="w-full h-12 px-10 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <svg
            className="absolute top-1/2 left-3 transform -translate-y-1/2 w-5 h-5 text-gray-500"
            fill="none" viewBox="0 0 20 20"
          >
            <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
          <button type="submit" className="absolute right-2 top-1.5 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
            Search
          </button>
        </form>
      </div>

     
      <div className="text-center mb-10">
        <Link
          to="/restaurants"
          className="inline-flex items-center bg-blue-600 hover:bg-blue-800 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Restaurants
        </Link>
      </div>

     
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredItems.map((item) => (
          <div key={item.itemId} className="bg-white border rounded-lg shadow-md hover:shadow-lg transition-transform hover:scale-105 p-4 flex flex-col justify-between">
            <img src={item.itemImage} alt={item.itemName} className="h-48 w-full object-cover rounded-md mb-4" />
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-1">{item.itemName}</h3>
              <p className="text-green-600 font-bold">₹{item.price}</p>
              <p className="text-yellow-500 text-sm mb-3">⭐ {item.rating}</p>
            </div>
            <div className="flex flex-col items-center gap-2 mt-auto">

              <button
                onClick={() => {
                  dispatch(addToCart(item));
                  navigate('/cart');
                }}
                className="bg-green-500 hover:bg-green-600 text-white text-md py-2 px-4 rounded shadow"
              >
                Add to Cart
              </button>
              <button
                onClick={() => navigate(`/restaurants/${id}/menu/${item.itemId}`)}
                className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 text-md px-4 shadow rounded mb-4"
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
