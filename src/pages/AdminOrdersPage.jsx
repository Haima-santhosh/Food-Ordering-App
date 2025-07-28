import React, { useEffect, useState } from "react";
import { fetchOrder } from "../api/adminOrderData";

const AdminOrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await fetchOrder();
      setOrders(data);
    })();
  }, []);

  const handleCancel = (orderId) => {
    const updatedOrders = orders.map((order) =>
      order.id === orderId ? { ...order, lastStatus: "Cancelled" } : order,
    );
    setOrders(updatedOrders);
  };

  return (
    <div className="bg-white dark:bg-slate-900 min-h-screen p-6">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Order Management
      </h1>

      <div className="overflow-x-auto bg-white dark:bg-slate-800 p-4 rounded-lg shadow">
        <table className="min-w-[700px] w-full text-sm text-left table-auto">
          <thead className="text-gray-600 dark:text-white font-bold border-b border-gray-300 dark:border-gray-600">
            <tr>
              <th className="py-2 px-4 whitespace-nowrap">Order ID</th>
              <th className="py-2 px-4 whitespace-nowrap">Restaurant</th>
              <th className="py-2 px-4 whitespace-nowrap">Method</th>
              <th className="py-2 px-4 whitespace-nowrap">Status</th>
              <th className="py-2 px-4 whitespace-nowrap">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 dark:text-white font-medium">
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-b border-gray-200 dark:border-gray-700"
              >
                <td className="py-3 px-4 whitespace-nowrap">{order.id}</td>
                <td className="py-3 px-4 whitespace-nowrap">
                  {order.restaurantName}
                </td>
                <td className="py-3 px-4 whitespace-nowrap">{order.method}</td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <span
                    className={`px-3 py-2 text-xs rounded font-semibold ${
                      order.lastStatus === "Delivered"
                        ? "bg-green-100 text-green-700 dark:bg-green-600 dark:text-white"
                        : order.lastStatus === "Pending"
                          ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-600 dark:text-white"
                          : order.lastStatus === "Cancelled"
                            ? "bg-red-100 text-red-700 dark:bg-red-600 dark:text-white"
                            : "bg-gray-100 text-gray-700 dark:bg-gray-600 dark:text-white"
                    }`}
                  >
                    {order.lastStatus}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
                    <button
                      onClick={() => setSelectedOrder(order)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded text-xs"
                    >
                      View
                    </button>
                    <button
                      onClick={() => handleCancel(order.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded text-xs"
                    >
                      Cancel
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {orders.length === 0 && (
              <tr>
                <td
                  colSpan="5"
                  className="text-center py-6 text-gray-500 dark:text-gray-400"
                >
                  No orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-slate-800 rounded-lg w-full max-w-2xl p-6 relative max-h-[90vh] overflow-y-auto">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
              onClick={() => setSelectedOrder(null)}
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
              Order Details - {selectedOrder.id}
            </h2>
            <div className="space-y-2 text-sm dark:text-gray-200">
              <p>
                <strong>Restaurant:</strong> {selectedOrder.restaurantName}
              </p>
              <p>
                <strong>Customer:</strong> {selectedOrder.customerName}
              </p>
              <p>
                <strong>Method:</strong> {selectedOrder.method}
              </p>
              <p>
                <strong>Time Slot:</strong> {selectedOrder.timeSlot}
              </p>
              <p>
                <strong>Created At:</strong>{" "}
                {new Date(selectedOrder.createdAt).toLocaleString()}
              </p>
              <p>
                <strong>Last Status:</strong> {selectedOrder.lastStatus}
              </p>
              <p>
                <strong>Total Amount:</strong> ₹{selectedOrder.totalAmount}
              </p>
              <div>
                <strong>Items:</strong>
                <ul className="list-disc pl-5 mt-1">
                  {selectedOrder.items.map((item, index) => (
                    <li key={index}>
                      {item.itemName} × {item.quantity} — ₹{item.price}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminOrdersPage;
