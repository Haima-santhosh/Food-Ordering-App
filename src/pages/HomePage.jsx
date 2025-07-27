import React, { useEffect } from 'react'
import Banner from '../components/Banner';
import { FaUtensils, FaShippingFast, FaStar } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const loginData = JSON.parse(localStorage.getItem('loggedInUser'))
    if (!loginData || !loginData.email) {
      navigate('/login')
    }
  }, [navigate])

  return (
    <>
      <div>
        <Banner />

      
        <div className="py-11 px-5 mx-auto flex flex-wrap justify-center items-center gap-8 bg-white dark:bg-slate-900 transition-colors duration-300">
         
          <div className="max-w-sm w-full p-6 bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition">
            <div className="flex gap-4 items-center">
              <div className="flex-1 flex justify-center">
                <FaUtensils className="text-5xl text-blue-600" />
              </div>
              <div className="flex-1">
                <h6 className="mb-2 text-2xl font-semibold text-gray-900 dark:text-white">
                  Easy To Order
                </h6>
                <p className="text-gray-700 dark:text-gray-300 capitalize text-sm">
                  Browse our diverse menu and place your order with ease.
                </p>
              </div>
            </div>
          </div>

        
          <div className="max-w-sm w-full p-7 bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition">
            <div className="flex gap-4 items-center">
              <div className="flex-1 flex justify-center">
                <FaShippingFast className="text-5xl text-blue-600" />
              </div>
              <div className="flex-1">
                <h6 className="mb-2 text-2xl font-semibold text-gray-900 dark:text-white">
                  Fast Delivery
                </h6>
                <p className="text-gray-700 dark:text-gray-300 capitalize text-sm">
                  Get your food delivered quickly and hot to your doorstep.
                </p>
              </div>
            </div>
          </div>

        
          <div className="max-w-sm w-full p-6 bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition">
            <div className="flex gap-4 items-center">
              <div className="flex-1 flex justify-center">
                <FaStar className="text-5xl text-blue-600" />
              </div>
              <div className="flex-1">
                <h6 className="mb-2 text-2xl font-semibold text-gray-900 dark:text-white">
                  Best Quality
                </h6>
                <p className="text-gray-700 dark:text-gray-300 capitalize text-sm">
                  Enjoy top-quality meals from our partnered restaurants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
