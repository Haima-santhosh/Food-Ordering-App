import React, { useEffect, useState } from 'react'
import { createProduct, deleteProduct, fetchProduct, updateProduct } from '../api/adminProductData'


import ProductModal from "../components/EditAdminProductsModal";





const AdminProductsPage = () => {
  const [productData, setProductData] = useState(null)


  const [isModalOpen, setIsModalOpen] = useState(false)       
const [selectedProduct, setSelectedProduct] = useState(null)





 


 


  useEffect(() => {
    (async () => {
      const data = await fetchProduct()
      setProductData(data);
      console.log(data);
    })()
  }, [])


  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this product?");
    if (confirm) {
      const success = await deleteProduct(id);
      if (success) {
        setProductData(productData.filter(p => p.id !== id));
      }
    }
  }

 const handleEdit = (id) => {
  const product = productData.find(p => p.id === id);

  // Remove ₹ sign 
  const price = parseInt(product.price.toString().replace(/[^\d]/g, ''));

  setSelectedProduct({ ...product, price }); 
  setIsModalOpen(true);
};


const handleAddProduct = () => {
  setSelectedProduct(null);     
  setIsModalOpen(true);
};



  if (!productData) {
    return (
      <div className="w-full h-screen flex justify-center items-center text-3xl font-bold text-red-500">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-slate-900 min-h-screen p-6">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Product Management</h1>

    <div className="flex justify-end mb-4">
  <button
    onClick={handleAddProduct}
    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm"
  >
    + Add Product
  </button>
</div>


    <div className="overflow-x-auto bg-white dark:bg-slate-800 p-4 rounded-lg shadow">
  <table className="min-w-[700px] w-full text-sm text-left table-auto">
    <thead className="text-gray-600 dark:text-white font-bold border-b border-gray-300 dark:border-gray-600">
      <tr>
        <th className="py-2 px-4 whitespace-nowrap">Image</th>
        <th className="py-2 px-4 whitespace-nowrap">Product Name</th>
        <th className="py-2 px-4 whitespace-nowrap">Category</th>
        <th className="py-2 px-4 whitespace-nowrap">Price</th>
        <th className="py-2 px-4 whitespace-nowrap">Stock</th>
        <th className="py-2 px-4 whitespace-nowrap">Status</th>
        <th className="py-2 px-4 whitespace-nowrap">Actions</th>
      </tr>
    </thead>
    <tbody className="text-gray-700 dark:text-white font-semibold">
      {productData.map((product) => (
        <tr key={product.id} className="border-b border-gray-200 dark:border-gray-700">
          <td className="py-3 px-4">
            <img
              src={product.image}
              alt={product.name}
              className="h-12 w-12 object-cover rounded"
            />
          </td>
          <td className="py-3 px-4 whitespace-nowrap">{product.name}</td>
          <td className="py-3 px-4 whitespace-nowrap">{product.category}</td>
         <td className="py-3 px-4 whitespace-nowrap">₹{product.price}</td>
          <td className="py-3 px-4 whitespace-nowrap">{product.stock}</td>
          <td className="py-3 px-4">
            {product.inStock ? (
              <span className="inline-block px-4 py-2 text-xs font-semibold bg-green-100 text-green-700 rounded dark:bg-green-600 dark:text-white">
                In Stock
              </span>
            ) : (
              <span className="inline-block px-4 py-2 text-xs font-semibold bg-red-100 text-red-700 rounded dark:bg-red-600 dark:text-white">
                Out of Stock
              </span>
            )}
          </td>
          <td className="py-3 px-4">
            <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
              <button
                onClick={() => handleEdit(product.id)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-xs"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(product.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded text-xs"
              >
                Delete
              </button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


 <ProductModal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  product={selectedProduct}
  setProduct={setSelectedProduct}
  onSave={async (newOrUpdatedProduct) => {
   
    const cleanedProduct = {
      ...newOrUpdatedProduct,
      price: Number(newOrUpdatedProduct.price),
    };

    if (selectedProduct?.id) {
      const updated = await updateProduct(selectedProduct.id, cleanedProduct);
      if (updated) {
        setProductData(prev =>
          prev.map(p => p.id === updated.id ? updated : p)
        );
      }
    } else {
      const created = await createProduct(cleanedProduct);
      if (created) {
        setProductData(prev => [created, ...prev]);
      }
    }
    setIsModalOpen(false);
  }}
/>


    </div>


  )
}

export default AdminProductsPage

     