import axios from "axios";

export const fetchmenu = async () => {
  try {
    const { data } = await axios.get(
      "https://687938fb63f24f1fdca15b3d.mockapi.io/api/v1/menu",
    );

    //console.log({data})
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchmenuDetails = async (id, itemId) => {
  try {
    const { data } = await axios.get(
      `https://687938fb63f24f1fdca15b3d.mockapi.io/api/v1/menu/${id}`,
    );
    const menuItem = data.menu.find((item) => item.itemId === itemId);
    return menuItem;
  } catch (error) {
    console.error("Error fetching menu details:", error);
  }
};
