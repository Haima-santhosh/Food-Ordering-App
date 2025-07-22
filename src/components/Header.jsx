import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaTimes,FaShoppingCart, FaUserCircle } from 'react-icons/fa'
import { CiMenuFries } from 'react-icons/ci'
import { useSelector } from 'react-redux';





const Header = () => {


  const [click, setClick] = useState(false)
  const cartItems = useSelector((state) => state.cart.cartItems || []);
const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleClick = () => {
    setClick(!click)
    
  }
  const navLinkData =
    [
      {
        url: "/",
        text: "Home"
      },
      {
        url: "/about",
        text: "About"
      },
      {
        url: "/restaurants",
        text: "Restaurants"
      },

       {
        url: "/contact",
         text: "Contact"
      },

      
       {
  url: "/cart",
  icon: (
    <div className="relative">
      <FaShoppingCart size={35} />
      {totalCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1">
          {totalCount}
        </span>
      )}
    </div>
  )

      },
       

      {
        url: "/login",
        icon: <FaUserCircle size={35} />
      }




    ]



  return (
    <>
    <header className='bg-slate-900'>
      <div className='h-10vh flex justify-between z-50 text-white px-20 sm:py-8 md:py-4 lg:py-0 '>
        <div className='flex items-center flex-1'>
         
         <img src="/logo.png" alt="Grabbite Logo" className="h-full w-1/6" />
        </div>
      <div className='hidden sm:flex flex-1 items-center justify-end font-normal'>


          <div className='flex-10'>
            <ul className='flex gap-8 mr-16 text-[18px]'>
  {navLinkData.map((item, index) => (
    <li key={index}>
      <NavLink
        to={item.url}
        onClick={() => setClick(false)}
        className={({ isActive }) =>
          `block px-3 py-2 border-b border-transparent hover:bg-slate-800 hover:rounded text-xl text-center transition ${
            isActive ? 'text-blue-500 font-bold border-b-blue-500' : 'text-white'
          }`
        }
      >
        {item.icon ? item.icon : item.text}
      </NavLink>
    </li>
  ))}
</ul>

          </div>
        </div>

        <div>

         
        </div>
        <button className='block sm:hidden transition' onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </header>

    {click && (
 <div className='sm:hidden block absolute top-16 w-full left-0 right-0 bg-neutral-900 text-gray-200 font-medium z-50'>

  <ul className='text-center text-xl py-6 px-4'>
    {navLinkData.map((item, index) => (
      <li
        key={index}
        className='my-4 py-5 border-b border-gray-800 hover:bg-blue-600 hover:text-white hover:rounded transition duration-300'
      >
        <Link
          to={item.url}
          onClick={() => setClick(false)}
          className='flex items-center justify-center gap-2'
        >
          {item.icon && <span className='text-2xl'>{item.icon}</span>}
          <span>{item.text}</span>
        </Link>
      </li>
    ))}
  </ul>

</div>

)}

  </>
  )
}

export default Header