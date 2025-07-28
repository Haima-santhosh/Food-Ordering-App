import React from "react";

const EditAdminProductsModal = ({
  isOpen,
  onClose,
  product,
  setProduct,
  onSave,
}) => {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...product });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-700 p-6 rounded-lg w-[90%] max-w-md overflow-y-auto max-h-[90vh]">
        <div className="flex items-center justify-between mb-4 border-b pb-2">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {product?.id ? "Edit Product" : "Add New Product"}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            ✕
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1 dark:text-white">Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded dark:bg-gray-600 dark:text-white"
              value={product?.name || ""}
              onChange={(e) => setProduct({ ...product, name: e.target.value })}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1 dark:text-white">
                Price
              </label>
              <input
                type="number"
                className="w-full p-2 border rounded dark:bg-gray-600 dark:text-white"
                value={product?.price || ""}
                onChange={(e) => {
                  console.log("Price input changed:", e.target.value);
                  setProduct({ ...product, price: e.target.value });
                }}
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-1 dark:text-white">
                Category
              </label>
              <select
                className="w-full p-2 border rounded dark:bg-gray-600 dark:text-white"
                value={product?.category || ""}
                onChange={(e) =>
                  setProduct({ ...product, category: e.target.value })
                }
                required
              >
                <option value="">Select category</option>
                <option value="Fast Food">Fast Food</option>
                <option value="Beverages">Beverages</option>
                <option value="Indian">Indian</option>
                <option value="Chinese">Chinese</option>
                <option value="Italian">Italian</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm mb-1 dark:text-white">Stock</label>
            <input
              type="number"
              className="w-full p-2 border rounded dark:bg-gray-600 dark:text-white"
              value={product?.stock || ""}
              onChange={(e) =>
                setProduct({ ...product, stock: e.target.value })
              }
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1 dark:text-white">Status</label>
            <select
              className="w-full p-2 border rounded dark:bg-gray-600 dark:text-white"
              value={product?.inStock ? "In Stock" : "Out of Stock"}
              onChange={(e) =>
                setProduct({
                  ...product,
                  inStock: e.target.value === "In Stock",
                })
              }
              required
            >
              <option value="In Stock">In Stock</option>
              <option value="Out of Stock">Out of Stock</option>
            </select>
          </div>

          <div>
            <label className="block text-sm mb-1 dark:text-white">
              Image URL
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded dark:bg-gray-600 dark:text-white"
              placeholder="Paste Image URL Here"
              value={product?.image || ""}
              onChange={(e) =>
                setProduct({ ...product, image: e.target.value })
              }
              required
            />
          </div>

          {product?.image && (
            <div className="text-center">
              <img
                src={product.image}
                alt="Preview"
                className="w-24 h-24 object-cover mx-auto rounded border mt-2"
              />
            </div>
          )}

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditAdminProductsModal;
