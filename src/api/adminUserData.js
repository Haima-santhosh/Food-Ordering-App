import axios from "axios";

export const fetchUser = async () => {
  try {
    const { data } = await axios.get(
      "https://6883417e21fa24876a9d50f5.mockapi.io/userDetails",
    );

    //console.log({data})
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchUserDetails = async (id, itemId) => {
  try {
    const { data } = await axios.get(
      `https://6883417e21fa24876a9d50f5.mockapi.io/userDetails/${id}`,
    );
    const menuItem = data.menu.find((item) => item.itemId === itemId);
    return menuItem;
  } catch (error) {
    console.error("Error fetching menu details:", error);
  }
};
