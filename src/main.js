import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './input.css'
// import VueSweetalert2 from 'vue-sweetalert2';
// import 'sweetalert2/dist/sweetalert2.min.css';
import swalInstance, { showSweetAlert } from './common/sweetAlertCommon'; // Import the SweetAlert service
import axios from 'axios';



const axiosInstance = axios.create({
    baseURL: 'http://localhost:5005', // Replace with your API base URL
    // Add other global configurations here
  });
  
  
  
  const app = createApp(App);
  app.use(router)
//   app.use(VueSweetalert2);
// app.config.globalProperties.$swal = swalInstance;
app.config.globalProperties.$showSweetAlert = showSweetAlert;
app.config.globalProperties.$axios = axiosInstance;
app.mount('#app');