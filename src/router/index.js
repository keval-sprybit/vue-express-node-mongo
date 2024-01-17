import { createRouter, createWebHashHistory } from 'vue-router'
import { createPinia } from 'pinia';

import { useAuthStore, authStore } from '../store/store.js'; // Import the Pinia store
// import { useAuthStore,authStore } from './store/store.js';
import NotFound from '../views/NotFound.vue'; // Import your custom 404 component

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
    path: '/login',
    name: 'login',
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
  },
  { path: '/:catchAll(.*)', redirect: '/404' },
  { path: '/404', component: NotFound },
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


// authStore.$subscribe((mutation, state) => {
//   if (mutation.type === 'token') { // Check if the token was mutated
//     console.log('Token changed! New value:', state.token);
//     // Perform any actions based on the token change, e.g.,
//     if (state.token) {
//       router.push('/dashboard'); // Redirect to a protected route
//     } else {
//       authStore.clearUserDetails(); // Clear user data if token is cleared
//     }
//   }
// });

router.beforeEach((to, from, next) => {
  const token = useAuthStore().getToken;

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
    if (to.matched.length === 0) {
      // Route not found, redirect to 404
      next('/404');
    } else {
      next();
    }
  }
});


router.afterEach((to, from) => {
  // Perform any logic after the route has changed
  console.log(`Navigated 🚗 from ${from.path} to 🚲 ${to.path}`);
});

export default router
