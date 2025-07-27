import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">

      
        <div className="relative h-full w-full">
          <img
            src="https://developerbazaar.com/wp-content/uploads/elementor/thumbs/Frame-1000006436-r7q8rf5ueoflofz9mcycwftwiotj7ojhlfjapv205k.png"
            alt="Grabbite"
            className="rounded-lg w-full h-[500px] object-cover shadow-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center rounded-lg text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Grabbite</h1>
            <p className="text-xl font-semibold">Grab. Bite. Repeat.</p>
          </div>
        </div>

      
        <div className="space-y-6">
        
          <div>
            <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">Who We Are</h2>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Grabbite</strong> is your trusted food delivery partner, making mealtimes easier, faster, and tastier. Whether you're craving Indian spices, cheesy pizzas, or healthy smoothies — we deliver happiness to your doorstep.
            </p>
          </div>

        
          <div>
            <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">Why Grabbite?</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
              <li>Fast and reliable delivery 🚀</li>
              <li>Massive range of restaurants 🍽️</li>
              <li>Real-time order tracking 🚚</li>
              <li>Secure payment options 💳</li>
              <li>Curated menus and hot deals 💰</li>
            </ul>
          </div>

        
          <div>
            <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">Our Mission</h2>
            <p className="text-gray-700 dark:text-gray-300">
              To empower food lovers with an effortless way to grab their favorite meals anytime, anywhere — and keep coming back for more.
            </p>
          </div>

        
          <div>
            <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">Support Us</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Email us at <a href="mailto:support@grabbite.com" className="text-blue-600 dark:text-blue-400 underline">support@grabbite.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
