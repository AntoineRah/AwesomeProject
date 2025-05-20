import axios from 'axios';
import Config from 'react-native-config';

console.log('BASE_URL from config:', Config.BASE_URL);
const axiosInstance = axios.create({
  baseURL: Config.BASE_URL,
  timeout: parseInt(Config.TIMEOUT || '10000', 10),
  headers: {
    'Content-Type': 'application/json',
  },
});



export {axiosInstance};

