import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaUserCircle, FaTimes } from 'react-icons/fa';
import { CiMenuFries } from 'react-icons/ci';
import { useSelector } from 'react-redux';
import { ToggleTheme } from '../Context/ToggleThemeContext';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems || []);
  const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('loggedInUser')));

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('loggedInUser'));
    setUser(currentUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setUser(null);
    navigate('/login');
    setMenuOpen(false);
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const navItems = [
    { to: '/', text: 'Home' },
    { to: '/about', text: 'About' },
    { to: '/restaurants', text: 'Restaurants' },
    { to: '/contact', text: 'Contact' },
    {
      to: '/cart',
      icon: (
        <div className="relative">
          <FaShoppingCart size={20} />
          {totalCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1">
              {totalCount}
            </span>
          )}
        </div>
      ),
    },
    user
      ? {
          to: '/profile',
          icon: (
            <div className="flex items-center gap-1">
              <FaUserCircle size={20} />
              <span className="hidden md:inline text-sm">{user?.name || 'User'}</span>
            </div>
          ),
        }
      : {
          to: '/login',
          icon: <FaUserCircle size={20} />,
          text: 'Login',
        },
  ];

  return (
    <header className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-gray-700 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
       
        <Link to="/">
         <img
  src="/logo1.png"
  alt="Logo"
  className="h-12 w-auto max-w-[180px] object-contain"
/>

        </Link>

       
        <nav className="hidden sm:flex items-center gap-6">
          {navItems.map((item, i) => (
            <NavLink
              key={i}
              to={item.to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-1 px-2 py-1 rounded transition ${
                  isActive
                    ? 'text-blue-600 dark:text-blue-400 font-semibold border-b-2 border-blue-800'
                    : 'text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-800 '
                }`
              }
            >
              {item.icon || item.text}
            </NavLink>
          ))}
          <ToggleTheme />
          {user && (
            <button
              onClick={handleLogout}
              className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded text-sm"
            >
              Logout
            </button>
          )}
        </nav>

       
        <button onClick={toggleMenu} className="sm:hidden text-gray-800 dark:text-white">
          {menuOpen ? <FaTimes size={22} /> : <CiMenuFries size={24} />}
        </button>
      </div>

     
      {menuOpen && (
        <div className="sm:hidden px-4 pb-4 space-y-2 bg-white dark:bg-slate-900 border-t dark:border-slate-700">
          {navItems.map((item, i) => (
            <NavLink
              key={i}
              to={item.to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-2 py-2 border-b border-gray-200 dark:border-slate-700 ${
                  isActive
                    ? 'text-blue-600 dark:text-blue-400 font-semibold'
                    : 'text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-800'
                }`
              }
            >
              {item.icon}
              {item.text && <span>{item.text}</span>}
            </NavLink>
          ))}
          <div className="pt-2">
            <ToggleTheme />
          </div>
          {user && (
            <button
              onClick={handleLogout}
              className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded text-sm"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </header>
  )
}

export default Header
