import React, { useEffect, useState } from 'react'
import { fetchUserProfile } from '../api/userProfileData'

const UserProfilePage = () => {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await fetchUserProfile();
      setUserProfile(data);
    })();
  }, []);

  if (!userProfile) {
    return (
      <div className="w-full h-screen flex justify-center items-center text-3xl font-bold text-red-500">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-4 pt-8">
      <h1 className="max-w-5xl text-center py-8 pt-10 text-4xl font-extrabold mb-8  border bg-gray-100 dark:bg-gray-800 dark:text-white mx-auto rounded-lg shadow-lg">
        My Profile
      </h1>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-100 dark:bg-gray-800 border dark:border-gray-700 rounded-xl shadow-xl pb-10 px-10 py-10">

       
        <div className="space-y-6">
        
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md border dark:border-gray-600 p-6 text-center">
            <img
              src={userProfile.profileImage}
              alt="Profile"
              className="w-32 h-32 mx-auto rounded-full shadow border mb-4"
            />
            <h2 className="text-xl font-semibold">{userProfile.name}</h2>
            <p className="text-gray-600 dark:text-gray-300">{userProfile.email}</p>
            <p className="text-gray-600 dark:text-gray-300">{userProfile.phone}</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">{userProfile.address}</p>
          </div>

        
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md border dark:border-gray-600 p-6">
            <h3 className="text-lg font-bold mb-3 text-center">Latest Orders</h3>
            {userProfile.latestOrders?.map((order, index) => (
              <div key={index} className="mb-4 p-3 border rounded-md bg-gray-50 dark:bg-gray-800 dark:border-gray-600">
                <p className="font-semibold text-gray-800 dark:text-white">Restaurant: {order.restaurant}</p>
                <p className="text-gray-700 dark:text-gray-300">Items: {order.items.join(', ')}</p>
                <p className="text-gray-700 dark:text-gray-300">Total: {order.totalAmount}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Ordered At: {new Date(order.orderedAt).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </div>

       
        <div className="space-y-6">
          <h3 className="text-xl font-bold">Order Summary</h3>
          {userProfile.orders?.map((order) => (
            <div
              key={order.orderId}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md border dark:border-gray-600"
            >
              <p className="font-semibold text-gray-800 dark:text-white">
                Order ID: {order.orderId}
              </p>
              <p className="text-gray-600 dark:text-gray-300">Date: {order.date}</p>
              <p>
                Status:{' '}
                <span
                  className={`font-medium ${
                    order.status === 'Delivered'
                      ? 'text-green-600'
                      : 'text-yellow-500'
                  }`}
                >
                  {order.status}
                </span>
              </p>
              <p className="text-gray-800 dark:text-gray-200 font-semibold">
                Amount: ₹{order.amount}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default UserProfilePage
