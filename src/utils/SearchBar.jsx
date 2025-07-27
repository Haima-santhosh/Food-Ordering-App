import React from 'react';

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="w-1/3">
      <input
        type="text"
        placeholder="Search by restaurant name or food..."
        className="w-full px-4 py-2 rounded-lg border shadow-sm
                   bg-slate-100 text-gray-800 placeholder-gray-500
                   focus:outline-none focus:ring-2 focus:ring-blue-300
                   dark:bg-slate-800 dark:text-white dark:placeholder-gray-400
                   dark:border-gray-600 dark:focus:ring-blue-500"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
