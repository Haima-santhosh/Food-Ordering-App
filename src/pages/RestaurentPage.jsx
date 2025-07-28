import React, { useEffect, useState } from "react";
import Category from "../utils/Category";

import RestaurentCard from "../components/RestaurentCard";
import { fetchrestaurent } from "../api/restaurentData";
import Pagination from "../utils/Pagination";
import SearchBar from "../utils/SearchBar";
import Filters from "../utils/Filters";
import SortDropdown from "../utils/SortDropdown";

const RestaurentPage = () => {
  const [restaurent, setRestaurent] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("");

  const [appliedFilters, setAppliedFilters] = useState({
    cuisine: [],
    dietary: [],
    priceRange: [],
    deliveryTime: [],
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const handleApplyFilters = (filters) => {
    setAppliedFilters(filters);
  };

  const handleClearFilters = () => {
    setAppliedFilters({
      cuisine: [],
      dietary: [],
      priceRange: [],
      deliveryTime: [],
    });
  };

  useEffect(() => {
    (async () => {
      const data = await fetchrestaurent();
      setRestaurent(data);
      console.log(data);
    })();
  }, []);

  //console.log({restaurent})

  if (restaurent.length === 0) {
    return (
      <div className="width-full h-screen flex justify-center items-center text-3xl bold text-red-500">
        Loading...
      </div>
    );
  }

  const searchData = restaurent.filter((item) => {
    const nameMatch = item.RestaurentName?.toLowerCase().includes(
      search.toLowerCase(),
    );
    const foodMatch = item.foodItems?.some((food) =>
      food.toLowerCase().includes(search.toLowerCase()),
    );
    const categoryMatch = category ? item.category === category : true;

    return (nameMatch || foodMatch) && categoryMatch;
  });

  const sortedData = [...searchData];

  if (sort === "ratingHigh") {
    sortedData.sort((a, b) => b.rating - a.rating);
  } else if (sort === "ratingLow") {
    sortedData.sort((a, b) => a.rating - b.rating);
  } else if (sort === "deliveryFast") {
    sortedData.sort((a, b) => {
      const aTime = parseInt(a.deliveryTime) || 0;
      const bTime = parseInt(b.deliveryTime) || 0;
      return aTime - bTime;
    });
  } else if (sort === "deliverySlow") {
    sortedData.sort((a, b) => {
      const aTime = parseInt(a.deliveryTime) || 0;
      const bTime = parseInt(b.deliveryTime) || 0;
      return bTime - aTime;
    });
  } else if (sort === "priceHigh") {
    sortedData.sort((a, b) => {
      const aPrice = parseInt(a.AveragePrice.replace(/[^\d]/g, "")) || 0; // Remove Rupee symbol conflict
      const bPrice = parseInt(b.AveragePrice.replace(/[^\d]/g, "")) || 0;

      return bPrice - aPrice;
    });
  } else if (sort === "priceLow") {
    sortedData.sort((a, b) => {
      const aPrice = parseInt(a.AveragePrice.replace(/[^\d]/g, "")) || 0;
      const bPrice = parseInt(b.AveragePrice.replace(/[^\d]/g, "")) || 0;

      return aPrice - bPrice;
    });
  }

  const filteredData = sortedData.filter((item) => {
    const cuisineMatch =
      appliedFilters.cuisine.length === 0 ||
      appliedFilters.cuisine.includes(item.cuisineType);

    const dietaryMatch =
      appliedFilters.dietary.length === 0 ||
      appliedFilters.dietary.includes(item.dietary);

    const price = parseInt(item.AveragePrice.replace(/[^\d]/g, "")) || 0; //REmove rupee symbol ₹

    const priceMatch =
      appliedFilters.priceRange.length === 0 ||
      appliedFilters.priceRange.some((range) => {
        if (range === "₹0 – ₹200") return price <= 200;
        if (range === "₹200 – ₹500") return price > 200 && price <= 500;
        if (range === "₹500+") return price > 500;
        return false;
      });

    const delivery = parseInt(item.deliveryTime) || 0;
    const deliveryMatch =
      appliedFilters.deliveryTime.length === 0 ||
      appliedFilters.deliveryTime.some((time) => {
        if (time === "Under 30 mins") return delivery <= 30;
        if (time === "Under 45 mins") return delivery <= 45;
        return false;
      });

    return cuisineMatch && dietaryMatch && priceMatch && deliveryMatch;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <div className="min-h-screen w-full px-4 md:px-6 lg:px-10 py-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <h1 className="text-center p-6 font-bold text-5xl border mx-auto rounded-lg shadow-lg bg-slate-100 dark:bg-slate-800 dark:border-slate-700">
        Explore Your Favourite Restaurants
      </h1>

      <div className="flex justify-center mt-10">
        <div className="flex w-[95%] flex-col lg:flex-row gap-6 pb-10">
          <div className="dark:bg-slate-800 dark:border-slate-700 rounded-lg p-4">
            <Filters
              onApplyFilters={handleApplyFilters}
              onClearFilters={handleClearFilters}
            />
          </div>

          <div className="basis-3/4 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg shadow-md">
            <div className="flex justify-center mb-10 mt-10">
              <div className="flex w-[80%] gap-4">
                <Category category={category} setCategory={setCategory} />
                <SearchBar search={search} setSearch={setSearch} />
                <SortDropdown sort={sort} setSort={setSort} />
              </div>
            </div>

            <div className="w-[90%] p-5 mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 bg-slate-100 dark:bg-slate-800 rounded-lg mb-10">
              {filteredData.length === 0 ? (
                <p className="text-center text-red-500 dark:text-red-400 col-span-full">
                  No data found.
                </p>
              ) : (
                currentItems.map((item, index) => (
                  <RestaurentCard key={index} item={item} />
                ))
              )}
            </div>
            <Pagination
              className="mx-auto dark:text-white"
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurentPage;
