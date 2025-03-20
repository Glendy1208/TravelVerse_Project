import API from "../service/api/axiosConfig"

export const checkLoginStatus = async () => {
    try {
      const response = await API.get("/protected");
  
      if (response.status !== 200) {
        throw new Error("Session expired. Please log in again.");
      }
  
      const data = await response.data;
      return data.user;
    } catch (error) {
      console.error(error.message);
      return null; // 🔹 Jika token expired, kembalikan null
    }
  };