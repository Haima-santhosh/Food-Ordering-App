import axios from "axios";


export const fetchProduct = async () => {

    try {

      const { data } = await axios.get('https://68750bcedd06792b9c9677c5.mockapi.io/adminProductData');

      //console.log({data});
      return data
    }
    catch (error) {
      console.log(error);

    }
  }

export const fetchProductDetails = async (id, itemId) => {
  try {
    const { data } = await axios.get(`https://68750bcedd06792b9c9677c5.mockapi.io/adminProductData/${id}`);
    const menuItem = data.menu.find((item) => item.itemId === itemId);
    return menuItem;
  } catch (error) {
    console.error("Error fetching menu details:", error);
  }
}

export const deleteProduct = async (id) => {
  try {
   await axios.delete(`https://68750bcedd06792b9c9677c5.mockapi.io/adminProductData/${id.toString()}`)

    return true;
  } catch (error) {
    console.error('Failed to delete product:', error);
    return false;
  }
}

export const updateProduct = async (id, updatedData) => {
  try {
   const { data } = await axios.put(
  `https://68750bcedd06792b9c9677c5.mockapi.io/adminProductData/${id.toString()}`,
  updatedData
)

    return data;
  } catch (error) {
    console.error('Failed to update product:', error);
    return null;
  }
}

export const createProduct = async (newProduct) => {
  try {
    const { data } = await axios.post(
      'https://68750bcedd06792b9c9677c5.mockapi.io/adminProductData',
      newProduct
    );
    return data;
  } catch (error) {
    console.error('Failed to create product:', error);
    return null;
  }
}



