import axios from "axios"

export const fetchUserProfile = async () => {
  try {
    const { data } = await axios.get(
      "https://6870b8cc7ca4d06b34b7b2dc.mockapi.io/UserProfileData",
    )
    return data[0]; // get the first user object
  } catch (error) {
    console.log(error)
  }
}
