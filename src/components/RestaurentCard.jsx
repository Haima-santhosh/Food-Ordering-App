import React from "react";
import { Link } from "react-router-dom";



const RestaurentCard = ({ item }) => {




  


  return (
  <Link to={`/restaurents/${item.id}/menu`}  >

   <div className="text-center max-w-sm w-full bg-white rounded-xl shadow-md overflow-hidden border hover:shadow-xl flex flex-col p-2 hover:scale-105 transition-transform duration-300">
     <div className="relative w-full h-48">
       <img
          src={item.menuImage}
          alt={item.restaurentName}
          className="w-full h-48 object-cover"
        />
        <span className="absolute bottom-2 left-2 bg-red-600 text-white text-xs px-3 py-1 rounded shadow-md">
          {item.discountBadge}
        </span>
      </div>

      <div className="bg-slate-100 p-4 flex flex-col justify-between flex-grow min-h-[220px]">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-800 truncate">{item?.RestaurentName}</h3>
          <div className="flex items-center gap-1 bg-green-500 text-white text-xs px-2 py-1 rounded">
            <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09L5.82 12 1 7.91l6.09-.89L10 2l2.91 5.02L19 7.91 14.18 12l1.697 6.09z" />
            </svg>
            {item?.rating}
          </div>
        </div>
        <p className="text-sm text-gray-600 mb-1 truncate">{item?.AveragePrice}</p>
        <p className="text-sm text-gray-500 mb-2 truncate">{item?.category}</p>

        <p className="text-sm text-gray-600 mb-1 truncate">{item?.cuisineType}</p>
        <p className="text-sm text-gray-500 mb-2 truncate">{item?.location}</p>

        <div className="text-xs text-gray-500 flex items-center gap-2 justify-center">
          <span className="inline-block w-2 h-2 bg-green-400 rounded-full"></span>
          <span className="">{item?.deliveryTime}</span>
        </div>
<Link to={`/restaurents/${item.id}/menu`}>

  <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
    Browse Menu
  </button>
</Link>



      </div>
    </div>
  </Link>
  );
};

export default RestaurentCard;
