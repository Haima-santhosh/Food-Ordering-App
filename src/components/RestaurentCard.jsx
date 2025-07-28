import React from "react";
import { Link } from "react-router-dom";

const RestaurentCard = ({ item }) => {
  return (
    <Link to={`/restaurants/${item.id}/menu`}>
      <div className="w-full max-w-xs mx-auto text-center bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden border dark:border-slate-700 hover:shadow-xl hover:scale-105 transition-transform duration-300 p-2">
        <div className="relative w-full h-48">
          <img
            src={item.menuImage}
            alt={item.RestaurentName}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <span className="absolute bottom-2 left-2 bg-red-600 text-white text-xs px-3 py-1 rounded shadow-md">
            {item.discountBadge}
          </span>
        </div>

        <div className="bg-gray-50 dark:bg-slate-700 p-4 flex flex-col justify-between flex-grow min-h-[220px] rounded-b-lg">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white truncate">
              {item?.RestaurentName}
            </h3>
            <div className="flex items-center gap-1 bg-green-500 text-white text-xs px-2 py-1 rounded">
              <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09L5.82 12 1 7.91l6.09-.89L10 2l2.91 5.02L19 7.91 14.18 12l1.697 6.09z" />
              </svg>
              {item?.rating}
            </div>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-300 mb-1 truncate">
            {item?.AveragePrice}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-1 truncate">
            {item?.category}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-1 truncate">
            {item?.cuisineType}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 truncate">
            {item?.location}
          </p>

          <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-2 justify-center">
            <span className="inline-block w-2 h-2 bg-green-400 rounded-full"></span>
            <span>{item?.deliveryTime}</span>
          </div>

          <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition font-medium">
            Browse Menu
          </button>
        </div>
      </div>
    </Link>
  );
};

export default RestaurentCard;
