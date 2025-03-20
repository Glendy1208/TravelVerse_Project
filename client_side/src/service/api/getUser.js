import API from '../api/axiosConfig';

export const getUsers = async () => {
    try {
        const response = await API.get("/getUsers");
    
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
