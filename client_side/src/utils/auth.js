export const checkLoginStatus = async () => {
    try {
      const response = await fetch("http://localhost:5430/api/protected", {
        method: "GET",
        credentials: "include", // 🔹 Cookie JWT otomatis dikirim
      });
  
      if (!response.ok) {
        throw new Error("Session expired. Please log in again.");
      }
  
      const data = await response.json();
      console.log("User masih login:", data.user);
      return data.user;
    } catch (error) {
      console.error(error.message);
      return null; // 🔹 Jika token expired, kembalikan null
    }
  };