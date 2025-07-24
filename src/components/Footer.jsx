import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
   <footer className="bg-white dark:bg-[#1E293B] text-gray-800 dark:text-gray-300 px-6 py-10 shadow- lg border-t border-gray-200 dark:border-gray-700">

  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

    <div>
      <img src="/logo.png" alt="Grabbite Logo" className="h-24 w-1/3" />
      <p className="text-xl text-gray-600 dark:text-gray-400">Grab. Bite. Repeat.</p>
    </div>

    
    <div>
   <h3 className="text-lg font-semibold mb-3 text-black dark:text-white">Quick Links</h3>
     <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
  <li><Link to="/" className="hover:text-black dark:hover:text-white">Home</Link></li>
  <li><Link to="/about" className="hover:text-black dark:hover:text-white">About</Link></li>
  <li><Link to="/restaurants" className="hover:text-black dark:hover:text-white">Restaurants</Link></li>
  <li><Link to="/contact" className="hover:text-black dark:hover:text-white">Contact</Link></li>
      </ul>
    </div>

   
    <div>
       <h3 className="text-lg font-semibold mb-3 text-black dark:text-white">Support</h3>
      <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
       <li><a href="#" className="hover:text-black dark:hover:text-white">FAQs</a></li>

        <li><a href="#" className="hover:text-black dark:hover:text-white">Privacy Policy</a></li>
        <li><a href="#" className="hover:text-black dark:hover:text-white">Terms & Conditions</a></li>
        <li><a href="#" className="hover:text-black dark:hover:text-white">Help Center</a></li>
      </ul>
    </div>

    
    <div>
      <h3 className="text-lg font-semibold mb-3 text-black dark:text-white">Connect</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Email: support@grabbite.com</p>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Phone: +91 98765 43210</p>
      <div className="flex space-x-4">
       <a href="#"><i className="fab fa-facebook text-xl text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"></i></a>  
<a href="#"><i className="fab fa-instagram text-xl text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"></i></a> 
<a href="#"><i className="fab fa-twitter text-xl text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"></i></a>   
<a href="#"><i className="fab fa-youtube text-xl text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"></i></a>  
      </div>
    </div>

  </div>

  <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-10 border-t border-gray-300 dark:border-slate-700 pt-6">

    © {new Date().getFullYear()} Grabbite. All rights reserved.
  </div>
</footer>

  )
}

export default Footer