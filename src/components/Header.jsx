import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import { CiMenuFries } from 'react-icons/ci'


const Header = () => {


  const [click, setClick] = useState(false)
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
        url: "/menu",
        text: "Menu"
      },

      {
        url: "/cart",
        text: "Cart"
      },

      {
        url: "/login",
        text: "Login"
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
              {navLinkData.map((item) =>
              (
                <NavLink key={item.text}
        to={item.url}
        className={({ isActive }) =>
          isActive
            ? "text-blue-600 border-b-2 border-blue-800 font-extrabold"
            : "hover:text-blue-600 font-extrabold"
        }
      >
        {item.text}
      </NavLink>
              )
              )

              }

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
 <div className='sm:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition text-white font-medium'>

    <ul className='text-center text-xl p-20'>
      {navLinkData.map((item, index) => (
        <Link key={index} to={item.url} onClick={() => setClick(false)}>
          <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>
            {item.text}
          </li>
        </Link>
      ))}
    </ul>
  </div>
)}

  </>
  )
}

export default Header