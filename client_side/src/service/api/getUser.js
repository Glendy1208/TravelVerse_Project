import API from '../api/axiosConfig';
import { useEffect, useState } from "react";

const useUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await API.get("/getUsers");
        if (response.status === 200) {
          setUser(response.data[0].payload[0]);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return user;
};

export default useUser;