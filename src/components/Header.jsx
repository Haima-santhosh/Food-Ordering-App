import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaTimes, FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import { CiMenuFries } from 'react-icons/ci';
import { useSelector } from 'react-redux';
import { ToggleTheme } from '../Context/ToggleThemeContext';

const Header = () => {
  const [click, setClick] = useState(false);
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
  };

  const handleClick = () => setClick(!click);

  const navLinkData = [
    { url: '/', text: 'Home' },
    { url: '/about', text: 'About' },
    { url: '/restaurants', text: 'Restaurants' },
    { url: '/contact', text: 'Contact' },
    {
      url: '/cart',
      icon: (
        <div className="relative">
          <FaShoppingCart size={22} />
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
          url: '/profile',
          icon: (
            <div className="flex items-center gap-1">
              <FaUserCircle size={22} />
              <span className="hidden md:block text-sm">{user?.name || 'User'}</span>
            </div>
          ),
          isProfile: true,
        }
      : {
          url: '/login',
          icon: <FaUserCircle size={22} />,
          text: 'Login',
        },
  ];

  return (
    <>
    <header className="bg-white dark:bg-slate-900 w-full border-b border-gray-200 dark:border-gray-700 shadow-md z-50">
  <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-20 py-4 text-gray-900 dark:text-white">


           <Link to="/">
      <img
        src="/logo.png"
        alt="Logo"
        className="h-10 md:h-14 w-auto brightness-110 contrast-125"
      />
    </Link>

    
    <div className="hidden sm:flex items-center justify-end flex-1 gap-4 md:gap-6">
      
      <ul className="flex items-center flex-wrap gap-2 text-sm md:text-base">
        {navLinkData.map((item, idx) => (
          <li key={idx}>
            <NavLink
              to={item.url}
              onClick={() => setClick(false)}
              className={({ isActive }) =>
                `flex items-center gap-1 px-2 py-1 rounded transition whitespace-nowrap ${
                  isActive
                    ? 'text-blue-600 dark:text-blue-400 font-semibold'
                    : 'text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-slate-800'
                }`
              }
            >
              {item.icon || item.text}
            </NavLink>
          </li>
        ))}
      </ul>

     
      <ToggleTheme />
      {user && (
        <button
          onClick={handleLogout}
          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded text-sm"
        >
          Logout
        </button>
      )}
    </div>

    
    <button className="block sm:hidden" onClick={handleClick}>
      {click ? <FaTimes size={22} /> : <CiMenuFries size={24} />}
    </button>
  </div>
</header>
    
      {click && (
      
      <div className="hidden sm:flex items-center justify-between flex-wrap flex-1 gap-4 md:gap-6 custom-nav-container">

          <ul className="flex items-center flex-wrap gap-2 text-sm md:text-base custom-nav-links">

            {navLinkData.map((item, idx) => (
              <li
                key={idx}
                className="border-b border-gray-300 dark:border-gray-700 py-4 hover:bg-blue-100 dark:hover:bg-blue-600 transition"
              >
                <Link
                  to={item.url}
                  onClick={() => setClick(false)}
                  className="flex justify-center items-center gap-2 text-gray-900 dark:text-white"
                >
                  {item.icon}
                  {item.text && <span>{item.text}</span>}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex justify-center mb-4">
            <ToggleTheme />
          </div>
          {user && (
            <div className="flex justify-center pb-4">
              <button
                onClick={handleLogout}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default Header


