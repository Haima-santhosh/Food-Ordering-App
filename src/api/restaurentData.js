import axios from "axios";


export const fetchrestaurent = async () => {

    try {

      const { data } = await axios.get('https://687938fb63f24f1fdca15b3d.mockapi.io/api/v1/restaurentData');

      //console.log({data});
      return data
    }
    catch (error) {
      console.log(error);

    }
  }


  export const fetchRestaurentDetails = async (id) => {

    try {

      const { data } = await axios.get(`https://687938fb63f24f1fdca15b3d.mockapi.io/api/v1/restaurentData${id}`)
      //console.log({data});
      return data
    }
    catch (error) {
      console.log(error);

    }
  }