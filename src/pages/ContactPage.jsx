import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="border rounded-lg shadow-lg p-4 bg-gray-100 dark:bg-slate-800 text-4xl font-bold text-center text-gray-800 dark:text-white mb-4">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          We'd love to hear from you! Whether it’s feedback, support or
          partnership—drop us a message.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow">
            <form noValidate>
              <div className="mb-4">
                <label className="block mb-1 font-semibold text-gray-700 dark:text-white">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Please Enter Your Name"
                  className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-semibold text-gray-700 dark:text-white">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Please Enter Your Email"
                  className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-semibold text-gray-700 dark:text-white">
                  Message
                </label>
                <textarea
                  placeholder="Your message..."
                  rows="5"
                  className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded font-semibold transition"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              Reach Us
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              📍 <strong>Address:</strong> 123 Street, Kochi, Kerala
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              📞 <strong>Phone:</strong> +91 98765 43210
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              📧 <strong>Email:</strong> support@grabbite.com
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-4">
              ⏰ <strong>Hours:</strong> Mon–Sun: 9 AM – 11 PM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
