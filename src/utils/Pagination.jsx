import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  if (totalPages === 1) return null; // Hide pagination if only one page

  return (
    <div className="flex justify-center my-8 gap-2 ">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 border rounded transition 
          ${currentPage === 1
            ? 'text-gray-400 dark:text-gray-500 cursor-not-allowed'
            : 'hover:bg-gray-200 dark:hover:bg-slate-700 dark:text-white'}`}
      >
        Prev
      </button>

      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`px-4 py-2 border rounded transition 
            ${
              currentPage === number
                ? 'bg-blue-600 text-white'
                : 'text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-slate-700'
            }`}
        >
          {number}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 border rounded transition 
          ${currentPage === totalPages
            ? 'text-gray-400 dark:text-gray-500 cursor-not-allowed'
            : 'hover:bg-gray-200 dark:hover:bg-slate-700 dark:text-white'}`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
