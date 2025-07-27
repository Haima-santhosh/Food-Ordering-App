import axios from "axios";


export const fetchOrder = async () => {

    try {

      const { data } = await axios.get('https://6871bdd476a5723aacd2a7e6.mockapi.io/adminOrders');

      //console.log({data});
      return data
    }
    catch (error) {
      console.log(error);

    }
  }

export const fetchOrderDetails = async (id, itemId) => {
  try {
    const { data } = await axios.get(`https://6871bdd476a5723aacd2a7e6.mockapi.io/adminOrders/${id}`);
    const menuItem = data.menu.find((item) => item.itemId === itemId);
    return menuItem;
  } catch (error) {
    console.error("Error fetching menu details:", error);
  }
};
