import { createRouter, createWebHashHistory } from 'vue-router'
import { createPinia } from 'pinia';

import { useAuthStore,authStore } from '../store/store.js'; // Import the Pinia store
// import { useAuthStore,authStore } from './store/store.js';


import HomeView from '../views/HomeView.vue'
import RegistationView from '../views/RegistationView.vue'
import DashboardView from '../views/DashboardView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { guest: true }
  },
  {
    path: '/registration',
    name: 'registration',
    component: RegistationView,
    meta: { guest: true }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView,
    meta: { requireAuth: true }
  },
  {
    path: '/about',
    name: 'about',

    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    meta: { guest: true }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


// const authStore = useAuthStore();
// let token= localStorage.getItem('token') || false;
// console.log(" each",useAuthStore.getToken)

// router.beforeEach((to, from, next) => {
//   const token = useAuthStore().getToken;
//   console.log("toker from before each requireAuth ",token)

//   if (to.matched.some((record) => record.meta.requireAuth)) {
//     if (token) {
//       next();
//       return;
//     }
//     next("/");
//   } else {
//     next();
//   }
  

// });

// router.beforeEach((to, from, next) => {
//   const token = useAuthStore().getToken;
//   console.log("toker from before each guest",token)

//   if (to.matched.some((record) => record.meta.guest)) {
//     if (token) {
//       next('/dashboard');
//       return;
//     }
//     next();
//   } else {
//     next();
//   }

// });

router.beforeEach((to, from, next) => {
  const token = useAuthStore().getToken;
  // console.log("Token from beforeEach:", token);

  if (to.matched.some((record) => record.meta.requireAuth)) {
    if (token) {
      next();
    } else {
      next("/");
    }
  } else if (to.matched.some((record) => record.meta.guest)) {
    if (token) {
      next('/dashboard');
    } else {
      next();
    }
  } else {
    next();
  }
});


router.afterEach((to, from) => {
  // Perform any logic after the route has changed
  console.log(`Navigated 🚗 🚲 from ${from.path} to ${to.path}`);
});

export default router
