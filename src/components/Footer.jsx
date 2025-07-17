import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white px-6 py-10">
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
{/*     
    Logo and Tagline */}
    <div>
      <img src="/logo.png" alt="Grabbite Logo" className="h-24 w-1/3" />
      <p className="text-xl text-gray-400">Grab. Bite. Repeat.</p>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
      <ul className="space-y-2 text-sm text-gray-400">
        <li><a href="#" className="hover:text-white">Home</a></li>
        <li><a href="#" className="hover:text-white">Menu</a></li>
        <li><a href="#" className="hover:text-white">Offers</a></li>
        <li><a href="#" className="hover:text-white">Contact</a></li>
      </ul>
    </div>

    {/* Support */}
    <div>
      <h3 className="text-lg font-semibold mb-3">Support</h3>
      <ul className="space-y-2 text-sm text-gray-400">
        <li><a href="#" className="hover:text-white">FAQs</a></li>
        <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
        <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
        <li><a href="#" className="hover:text-white">Help Center</a></li>
      </ul>
    </div>

    {/* Contact and Social */}
    <div>
      <h3 className="text-lg font-semibold mb-3">Connect</h3>
      <p className="text-sm text-gray-400 mb-2">Email: support@grabbite.com</p>
      <p className="text-sm text-gray-400 mb-4">Phone: +91 98765 43210</p>
      <div className="flex space-x-4">
        <a href="#"><i className="fab fa-facebook text-xl hover:text-white"></i></a>
        <a href="#"><i className="fab fa-instagram text-xl hover:text-white"></i></a>
        <a href="#"><i className="fab fa-twitter text-xl hover:text-white"></i></a>
         <a href="#"><i className="fab fa-youtube text-xl hover:text-white"></i></a>
      </div>
    </div>

  </div>

  <div className="text-center text-sm text-gray-500 mt-10 border-t border-slate-700 pt-6">
    © {new Date().getFullYear()} Grabbite. All rights reserved.
  </div>
</footer>

  )
}

export default Footer