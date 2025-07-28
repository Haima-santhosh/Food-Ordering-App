import React, { useState } from "react";

const Filters = ({ onApplyFilters, onClearFilters }) => {
  const [cuisine, setCuisine] = useState([]);
  const [dietary, setDietary] = useState([]);
  const [priceRange, setPriceRange] = useState([]);
  const [deliveryTime, setDeliveryTime] = useState([]);

  const handleCheckboxChange = (value, state, setState) => {
    if (state.includes(value)) {
      setState(state.filter((item) => item !== value));
    } else {
      setState([...state, value]);
    }
  }

  const handleApplyFilters = () => {
    onApplyFilters({ cuisine, dietary, priceRange, deliveryTime })
  }

  const handleClearAll = () => {
    setCuisine([]);
    setDietary([]);
    setPriceRange([]);
    setDeliveryTime([]);
    onClearFilters()
  };

  const renderCheckbox = (label, state, setState) => (
    <label className="block mb-1 text-gray-800 dark:text-gray-200" key={label}>
      <input
        type="checkbox"
        className="mr-2"
        checked={state.includes(label)}
        onChange={() => handleCheckboxChange(label, state, setState)}
      />
      {label}
    </label>
  )

  return (
    <div className="basis-1/4 bg-slate-100 dark:bg-slate-800 p-6 border border-gray-300 dark:border-slate-700 rounded-md shadow-md h-screen overflow-y-auto">
      <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
        Filters
      </h2>

      <div className="mb-4">
        <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">
          Cuisine
        </h3>
        {["Asian", "Italian", "American", "Indian"].map((item) =>
          renderCheckbox(item, cuisine, setCuisine),
        )}
      </div>

      <div className="mb-4">
        <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">
          Dietary
        </h3>
        {["Pure Veg", "Non-Veg"].map((item) =>
          renderCheckbox(item, dietary, setDietary),
        )}
      </div>

      <div className="mb-4">
        <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">
          Price Range
        </h3>
        {["₹0 – ₹200", "₹200 – ₹500", "₹500+"].map((item) =>
          renderCheckbox(item, priceRange, setPriceRange),
        )}
      </div>

      <div className="mb-4">
        <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">
          Delivery Time
        </h3>
        {["Under 30 mins", "Under 45 mins"].map((item) =>
          renderCheckbox(item, deliveryTime, setDeliveryTime),
        )}
      </div>

      <div className="flex justify-center gap-3">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
          onClick={handleApplyFilters}
        >
          Apply Filters
        </button>
        <button
          className="block text-sm text-gray-500 dark:text-gray-300 underline hover:text-red-500 dark:hover:text-red-400"
          onClick={handleClearAll}
        >
          Clear All
        </button>
      </div>
    </div>
  )
}

export default Filters
