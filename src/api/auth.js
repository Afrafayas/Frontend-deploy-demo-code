        import axios from 'axios';

        export  const registerUser = async (userData) => {  
            // const API_URL = process.env.API_URL; 

            //new way to access env variables in Vite
            const API_URL = import.meta.env.VITE_API_URL;

            const response = await axios.post(`${API_URL}/register`, userData);
           
            return response.data;
        }


        export const loginUser = async (userData) => {
            // const API_URL = process.env.API_URL;

            //new way to access env variables in Vite
            const API_URL = import.meta.env.VITE_API_URL;
            const response = await axios.post(`${API_URL}/login`, userData);

            return response.data;
        }

       export const fetchUserProfile = async () => {
        const token = localStorage.getItem('token');
        const API_URL = import.meta.env.VITE_API_URL;
        const response = await axios.get(`${API_URL}/profile`, {
            headers: {
                Authorization: `Bearer ${token}`,       

       }  
        });
        return response.data;
       }