import React from 'react';
import { Link } from 'react-router-dom';




const Banner = () => {
  

  const socialMedia = [
    { link: "", image: "https://static.vecteezy.com/system/resources/thumbnails/018/930/752/small/twitter-logo-twitter-icon-transparent-free-free-png.png" },
    { link: "", image: "https://static.vecteezy.com/system/resources/previews/018/930/476/non_2x/facebook-logo-facebook-icon-transparent-free-png.png" },
    { link: "", image: "https://static.vecteezy.com/system/resources/previews/042/127/122/non_2x/red-circle-bordered-youtube-logo-with-long-shadow-on-transparent-background-free-png.png" },
    { link: "", image: "https://static.vecteezy.com/system/resources/thumbnails/042/148/632/small/instagram-logo-instagram-social-media-icon-free-png.png" },
  ];

  return (
    <>
      <div className="min-h-screen grid sm:grid-cols-1 md:grid-cols-2 bg-white dark:bg-gray-900 shadow-md">
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-center items-center p-10 gap-8 text-center">

            <h1 className="text-4xl md:text-6xl font-extrabold text-blue-800 dark:text-blue-300 leading-snug tracking-tight drop-shadow-md hidden sm:block">
              Order Your <br /> Favorite Food Online
            </h1>

            <p className="text-lg md:text-xl font-medium text-gray-700 dark:text-gray-300 leading-relaxed max-w-lg">
              Craving something delicious? Get your favorite meals delivered to your door — fast, fresh, and hassle-free.
            </p>

            <div className="mt-4 mb-4">
              <Link to='restaurants'>
                <button className="bg-blue-600 hover:bg-white dark:hover:bg-gray-800 text-white hover:text-blue-800 dark:hover:text-blue-300 border border-blue-800 dark:border-blue-400 px-6 py-3 rounded-xl text-base md:text-lg font-semibold shadow-md hover:shadow-xl transition duration-300 ease-in-out">
                  Order Now
                </button>
              </Link>

              <div className="flex justify-center items-center gap-6 pt-10">
                {socialMedia.map((item) => (
                  <a key={item.image} className="w-10 h-10 rounded-full overflow-hidden border hover:border-blue-800 dark:hover:border-blue-400" href={item.link}>
                    <img className="w-full h-full" src={item.image} alt="" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center p-4 bg-white dark:bg-gray-900">
          <img
            className="w-full max-w-md md:max-w-full rounded-lg shadow-lg"
            src="https://www.softsuave.com/blog/wp-content/uploads/2020/07/Food-Delivery-App-Development-Services-997x1024.png"
            alt="Food delivery App"
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
