import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://codecore.rzspyboy.me/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
