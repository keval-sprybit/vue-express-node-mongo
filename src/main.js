import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './input.css'
import 'vuetify/styles'
// import VueSweetalert2 from 'vue-sweetalert2';
// import 'sweetalert2/dist/sweetalert2.min.css';
import swalInstance, { showSweetAlert,confirmDelete } from './common/sweetAlertCommon'; // Import the SweetAlert service
import axios from 'axios';
import { createPinia } from 'pinia';
import { useAuthStore,authStore } from './store/store.js';

// import Vuetify from 'vuetify';

import { createVuetify } from 'vuetify'

import 'vuetify/dist/vuetify.min.css';

import 'vuetify/lib/styles/main.css';

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

const axiosInstance = axios.create({
  // baseURL: 'http://localhost:5005', // Replace with your API base URL
  baseURL: 'http://192.168.1.223:5005', // Replace with your API base URL
  headers: {
    common: {
      // 'Authorization': `Bearer ${localStorage.getItem('token')}`, // Get the token from local storage or set an empty string if it doesn't exist
      'Content-Type': 'application/json', // Adjust the content type as needed
    },
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    // You can check the URL and conditionally add the Authorization header
    if (shouldAddAuthorizationHeader(config.url)) {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => {
    // Handle request errors here
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
         useAuthStore().clearToken();
         router.push('/');
      }
    }
    else {
      console.error('Login failed: Unexpected status code', response.status);

    }
    return response;
  },
  (error) => {
    // Handle response errors here
    return Promise.reject(error);
  }
);

function shouldAddAuthorizationHeader(url) {
  console.log("url", url)
  // Add logic here to check the URL and return true if the header should be added
  if (url.includes('/api/auth/signin') || url.includes('/api/auth/signup')) {
    return false;
  }
  return true;
}

const app = createApp(App);
const pinia = createPinia(); // Create a Pinia instance

app.use(pinia); // Use Pinia
app.use(router);

app.use(vuetify);
// const authStore = useAuthStore(); 
// app.use(VueSweetalert2);
// app.config.globalProperties.$swal = swalInstance;

app.config.globalProperties.$showSweetAlert = showSweetAlert;
app.config.globalProperties.$confirmDelete = confirmDelete;
app.config.globalProperties.$axios = axiosInstance;
app.config.globalProperties.$store = useAuthStore();
app.mount('#app');