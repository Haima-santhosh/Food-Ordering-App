import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaTimes, FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import { CiMenuFries } from 'react-icons/ci';
import { useSelector } from 'react-redux';

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
          <FaShoppingCart size={25} />
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
              <FaUserCircle size={24} />
              <span className="hidden md:block text-sm">{user.name}</span>
            </div>
          ),
          isProfile: true,
        }
      : {
          url: '/login',
          icon: <FaUserCircle size={25} />,
          text: 'Login',
        },
  ];

  return (
    <>
      <header className="bg-slate-900 w-full">
        <div className="flex items-center justify-between px-6 py-4 md:px-12 lg:px-20 text-white">
          <Link to="/">
          <img src="/logo.png"alt="Logo" className="h-12 md:h-16 lg:h-20 w-auto brightness-110 contrast-125 opacity-100"
/>

          </Link>

         
          <div className="hidden sm:flex items-center gap-6">
            <ul className="flex items-center gap-6 text-lg">
              {navLinkData.map((item, idx) => (
                <li key={idx}>
                  <NavLink
                    to={item.url}
                    onClick={() => setClick(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-1 px-3 py-2 rounded transition ${
                        isActive ? 'text-blue-400 font-semibold' : 'text-white hover:bg-slate-800'
                      }`
                    }
                  >
                    {item.icon || item.text}
                  </NavLink>
                </li>
              ))}
            </ul>

            {user && (
              <button
                onClick={handleLogout}
                className="ml-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm"
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
        <div className="sm:hidden absolute top-[64px] left-0 w-full bg-neutral-900 z-50">
          <ul className="flex flex-col text-center text-lg py-4">
            {navLinkData.map((item, idx) => (
              <li key={idx} className="border-b border-gray-700 py-4 hover:bg-blue-600 transition">
                <Link
                  to={item.url}
                  onClick={() => setClick(false)}
                  className="flex justify-center items-center gap-2"
                >
                  {item.icon}
                  <span>{item.text}</span>
                </Link>
              </li>
            ))}
          </ul>

          {user && (
            <div className="flex justify-center pb-4">
              <button
                onClick={handleLogout}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded text-sm"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Header;
