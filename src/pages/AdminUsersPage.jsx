import React, { useEffect, useState } from "react";
import { fetchUser } from "../api/adminUserData";

const AdminUsersPage = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await fetchUser();
      setUserData(data);
      console.log(data);
    })();
  }, []);

  const toggleBlockStatus = (id) => {
    const updatedUsers = userData.map((user) =>
      user.id === id ? { ...user, isBlocked: !user.isBlocked } : user,
    );
    setUserData(updatedUsers);
  };

  const deleteUser = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this user?",
    );
    if (confirmed) {
      const updatedUsers = userData.filter((user) => user.id !== id);
      setUserData(updatedUsers);
    }
  };

  if (!userData) {
    return (
      <div className="w-full h-screen flex justify-center items-center text-3xl font-bold text-red-500">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-slate-900 min-h-screen p-6">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        User Management
      </h1>

      <div className="overflow-x-auto bg-white dark:bg-slate-800 p-4 rounded-lg shadow">
        <table className="min-w-[750px] w-full text-sm text-left table-auto">
          <thead className="text-gray-600 dark:text-white font-bold border-b border-gray-300 dark:border-gray-600">
            <tr>
              <th className="py-2 px-4">Image</th>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">Signup Date</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 dark:text-white font-medium">
            {userData.map((user) => (
              <tr
                key={user.id}
                className="border-b border-gray-200 dark:border-gray-700"
              >
                <td className="py-3 px-4">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="h-10 w-10 object-cover rounded-full border border-gray-300 dark:border-gray-600"
                  />
                </td>
                <td className="py-3 px-4">{user.name}</td>
                <td className="py-3 px-4">{user.email}</td>
                <td className="py-3 px-4">{user.signUpDate}</td>
                <td className="py-3 px-4">
                  {user.isBlocked ? (
                    <span className="inline-block px-3 py-2 text-xs font-semibold bg-red-100 text-red-700 rounded dark:bg-red-600 dark:text-white">
                      Blocked
                    </span>
                  ) : (
                    <span className="inline-block px-3 py-2 text-xs font-semibold bg-green-100 text-green-700 rounded dark:bg-green-600 dark:text-white">
                      Active
                    </span>
                  )}
                </td>
                <td className="py-3 px-4">
                  <div className="flex flex-col sm:flex-row sm:gap-3 gap-3">
                    <button
                      onClick={() => toggleBlockStatus(user.id)}
                      className={`px-3 py-2 text-xs rounded font-semibold ${
                        user.isBlocked
                          ? "bg-green-500 hover:bg-green-600 text-white"
                          : "bg-red-500 hover:bg-red-600 text-white"
                      }`}
                    >
                      {user.isBlocked ? "Unblock" : "Block"}
                    </button>

                    <button
                      onClick={() => deleteUser(user.id)}
                      className="px-3 py-2 text-xs rounded font-semibold bg-red-500 hover:bg-red-600 text-white"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {userData.length === 0 && (
              <tr>
                <td
                  colSpan="6"
                  className="text-center py-6 text-gray-500 dark:text-gray-400"
                >
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUsersPage;
