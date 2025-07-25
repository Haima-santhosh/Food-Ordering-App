import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTachometerAlt, FaBoxOpen, FaClipboardList, FaUsers } from 'react-icons/fa';

const navLinkData = [
  { url: '/admin', text: 'Dashboard', icon: <FaTachometerAlt /> },
  { url: '/admin/products', text: 'Products', icon: <FaBoxOpen /> },
  { url: '/admin/orders', text: 'Orders', icon: <FaClipboardList /> },
  { url: '/admin/users', text: 'Users', icon: <FaUsers /> },
];

const AdminSideBar = () => {
  return (
    <aside className="min-h-screen bg-white dark:bg-slate-900 border-r border-gray-200 dark:border-gray-700  w-64 p-4 hidden md:block shadow-sm">
     

      <nav className="flex flex-col gap-2 ">
        {navLinkData.map((item, index) => (
         <NavLink
  key={index}
  to={item.url}
  className={({ isActive }) =>
    ` flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition-colors ${
      isActive
        ? 'bg-blue-100 dark:bg-blue-700 text-blue-700 dark:text-white'
        : 'text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-slate-800'
    }`
  }
>
  {item.icon}
  {item.text}
</NavLink>

        ))}
      </nav>
    </aside>
  );
};

export default AdminSideBar;
