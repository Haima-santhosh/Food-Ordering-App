import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { FaTimes, FaUserCircle } from "react-icons/fa";
import { ToggleTheme } from "../Context/ToggleThemeContext";

const AdminHeader = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <header className=" bg-white p-3 dark:bg-slate-900 w-full border-b border-gray-200 dark:border-gray-700 shadow-xl font-sans">
        <div className="flex items-center justify-between px-6 py-4 md:px-12 lg:px-20 text-gray-900 dark:text-white">
          <Link to="/admin">
            <h2 className="text-2xl font-bold tracking-wide text-blue-600 dark:text-blue-400">
              Grabbite Admin
            </h2>
          </Link>

          <div className="hidden sm:flex items-center gap-6 text-base font-medium ">
            <ToggleTheme />
            <div className="flex items-center gap-2 text-sm">
              <FaUserCircle size={22} />
              <span className="hidden md:block font-semibold">Admin</span>
            </div>
          </div>

          <button
            className="block sm:hidden text-gray-800 dark:text-white"
            onClick={handleClick}
          >
            {click ? <FaTimes size={22} /> : <CiMenuFries size={24} />}
          </button>
        </div>
      </header>

      {click && (
        <div className="sm:hidden absolute top-[64px] left-0 w-full bg-gray-50 dark:bg-neutral-900 z-50 text-gray-900 dark:text-white font-medium">
          <ul className="flex flex-col text-center text-lg py-4">
            <li className="border-b border-gray-300 dark:border-gray-700 py-4 hover:bg-blue-100 dark:hover:bg-blue-600 transition-colors">
              <Link to="/admin" onClick={() => setClick(false)}>
                Dashboard
              </Link>
            </li>
            <li className="border-b border-gray-300 dark:border-gray-700 py-4 hover:bg-blue-100 dark:hover:bg-blue-600 transition-colors">
              <Link to="/admin/products" onClick={() => setClick(false)}>
                Products
              </Link>
            </li>
            <li className="border-b border-gray-300 dark:border-gray-700 py-4 hover:bg-blue-100 dark:hover:bg-blue-600 transition-colors">
              <Link to="/admin/orders" onClick={() => setClick(false)}>
                Orders
              </Link>
            </li>
            <li className="border-b border-gray-300 dark:border-gray-700 py-4 hover:bg-blue-100 dark:hover:bg-blue-600 transition-colors">
              <Link to="/admin/users" onClick={() => setClick(false)}>
                Users
              </Link>
            </li>
          </ul>

          <div className="flex justify-center mb-4">
            <ToggleTheme />
          </div>

          <div className="flex justify-center pb-4">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <FaUserCircle size={22} />
              <span>Admin</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminHeader;
