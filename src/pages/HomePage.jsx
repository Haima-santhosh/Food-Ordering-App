import React, { useEffect } from 'react'
import Banner from '../components/Banner'
import { FaUtensils,FaShippingFast, FaStar } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
 const navigate = useNavigate();

  useEffect(() => {
    const loginData = JSON.parse(localStorage.getItem('loggedInUser'));

    
    if (!loginData || !loginData.email) {
      navigate('/login')
    }
  }, [navigate]);


  return (
    <>
    <div>
<Banner />

   <div className="py-12 px-5 mx-auto flex flex-wrap justify-center items-center gap-8 bg-white dark:bg-gray-800">
 
  
  <a href="#" className="block max-w-sm p-6 bg-white  border-gray-200 border rounded-lg shadow-lg hover:bg-gray-100">
    <div className='flex gap-4 items-center'>
      <div className='flex-1 flex justify-center'>
        <FaUtensils className="text-5xl text-blue-600" />
      </div>
      <div className='flex-1'>
        <h6 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">Easy To Order</h6>
        <p className="font-normal text-gray-700 capitalize">Browse Our Diverse Menu and Place Your Order with Ease</p>
      </div>
    </div>
  </a>

  
  <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-xl hover:bg-gray-100">
    <div className='flex gap-4 items-center'>
      <div className='flex-1 flex justify-center'>
        <FaShippingFast className="text-5xl text-blue-600" />
      </div>
      <div className='flex-1'>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Fast Delivery</h5>
        <p className="font-normal text-gray-700 capitalize">Get Your Food Delivered Quickly and Hot to Your Doorstep</p>
      </div>
    </div>
  </a>

 
  <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-xl hover:bg-gray-100">
    <div className='flex gap-4 items-center'>
      <div className='flex-1 flex justify-center'>
        <FaStar className="text-5xl text-blue-600" />
      </div>
      <div className='flex-1'>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Best Quality</h5>
        <p className="font-normal text-gray-700 capitalize">Enjoy top-quality meals from our partnered restaurants</p>
      </div>
    </div>
  </a>

</div>


    </div>
    </>
  )
}

export default HomePage