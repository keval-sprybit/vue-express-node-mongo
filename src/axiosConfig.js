// axiosConfig.js
import axios from 'axios';
import { useAuthStore } from './store/store.js';
import router from './router';

const axiosInstance = axios.create({
  baseURL: 'http://192.168.1.59:5005', // Replace with your API base URL
  // headers: {
  //   common: {
  //     'Content-Type': 'application/json',
  //   },
  // },
});

axiosInstance.interceptors.request.use(
  async (config) => {
    if (shouldAddAuthorizationHeader(config.url)) {
      
      console.log("interceptors request  -- ➡️ 👉", config)

      if(config.url=="/api/image/image-upload")
      {
        config.headers['Content-Type'] = 'multipart/form-data';
      }else{
        config.headers['Content-Type'] = 'application/json';
      }
      // const token = localStorage.getItem('token');
      // const token = useAuthStore().getToken;
      await useAuthStore().refreshToken();
      const token = useAuthStore().getToken;

      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  async (response) => {
    // You can process successful responses here
    console.log("interceptors response  -- ➡️ 👉", response)
    const responseData = response.data
    if (response.status === 200) {

      if (responseData.statusCode === 401) {
        console.log("-------Logout--------- 🙂💔");
        router.push('/');
        useAuthStore().clearToken();
      }
      else{
        console.log("done");
      }
    }
    else {
      console.error('Login failed: Unexpected status code', response.status);
      router.push('/');
      useAuthStore().clearToken();
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

function shouldAddAuthorizationHeader(url) {
  if (url.includes('/api/auth/signin') || url.includes('/api/auth/signup')) {
    return false;
  }
  return true;
}

export default axiosInstance;
