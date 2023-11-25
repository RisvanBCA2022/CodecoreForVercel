import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://16.16.25.92/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
