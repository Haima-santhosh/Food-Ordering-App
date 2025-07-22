import React, { useEffect, useState } from 'react'
import { fetchmenu } from '../api/menuData'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react';

import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import { useNavigate } from 'react-router-dom';


const MenuPage = () => {

  


  

  const [restaurent,setRestaurent]=useState(null)
  const { id }=useParams()
  const [filter, setFilter] = useState('');
  const [query, setQuery] = useState('');
  

useEffect(() => {
    (async () => {
      const data = await fetchmenu();
      const selectedMenu = data.find(item => item.id === id);
      setRestaurent(selectedMenu);
    })();
  }, [id]);


 const handleFilter = (value) => {
  setFilter(value);
}


  const handleSearchSubmit = (e) => {
    e.preventDefault();
  }


  
const filteredData = restaurent?.menu
    ?.filter(item => item.itemName.toLowerCase().includes(query.toLowerCase()))
    ?.sort((a, b) => {
      if (filter === 'rating') return b.rating - a.rating;
      if (filter === 'price') return a.price - b.price;
      return 0;
    }) || []

const dispatch = useDispatch();
const navigate = useNavigate();

  


    if(!restaurent)
  {
    return(

      <div className='flex justify-center items-center min-h-screen  text-3xl bold text-red-500'>
        Loading...
      </div>

    )
    
  }



  
   return (
   <>
 <div className="min-h-screen w-full mx-auto bg-white mb-10 px-4 sm:px-6 md:px-8">


      

      <h1 className='text-center p-6 font-bold text-5xl border m-10 rounded-lg shadow-lg bg-slate-100'>
        {restaurent.RestaurentName} - Menu
      </h1>

      <div className='flex flex-col md:flex-row justify-between items-center gap-4 px-4 md:px-8 mb-6'>

        <div className='flex-1'>

<form className="max-w-sm mx-auto mb-6">
  <select
    id="filter"
    onChange={(e) => handleFilter(e.target.value)}
    className="h-12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
  >
    <option value="">Select By</option>
    <option value="rating">Top Rated</option>
    <option value="price">Low Price</option>
  
  </select>
</form>


        </div>

        <div className='flex-1'>

 <form onSubmit={handleSearchSubmit} className="max-w-md mx-auto">
      <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search Your Favourite Food...</label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500" aria-hidden="true" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <input
          type="search"
          id="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search for food..."
        />
        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2">
          Search
        </button>
      </div>
    </form>

        </div>

      </div>

                <div className='flex justify-center items-center'>
                  <Link
      to="/restaurants"
      className="inline-flex items-center text-blue-600 hover:text-blue-800   font-bold mb-8 text-2xl "
    >
      <ArrowLeft className="mr-2" size={20} />
      Back to Restaurants
    </Link>

                </div>
            

                 <div className="">
        <div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 bg-slate-100 border rounded-md">

      
        
        {filteredData.map((item, index) =>
        
        (
          
          
          <div key={index} className='border rounded-md p-4 bg-white shadow-md text-center h-full flex flex-col justify-between hover:scale-105 transition-transform duration-300'>
            
    
            <img src={item.itemImage} alt={item.itemName} className='h-48 object-cover w-full rounded-md mb-3 ' />
           <div className='bg-slate-100 p-2'>
             <h3 className='text-xl font-semibold mt-3 mb-3'>{item.itemName}</h3>
           
            <p className='text-green-700 font-bold'>₹{item.price}</p>
            <p className='text-yellow-500'>⭐ {item.rating}</p>
           
         <div className='flex flex-col items-center justify-center gap-3 mt-4'>
  <button
    onClick={() => {
      dispatch(addToCart(item));
      navigate('/cart');
    }}
    className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 w-40'
  >
    Add to Cart
  </button>

  <button
  onClick={() => {
   navigate(`/restaurants/${id}/menu/${item.itemId}`)

  }}
  className='bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-700 w-40 mb-4'
>
  View Details
</button>

</div>


           



          
           </div>
          </div>
        ))}
      </div>
      </div>
    </div>
    </>
  )

}
export default MenuPage