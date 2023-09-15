import { defineStore, createPinia } from 'pinia';

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        // token: '', // Initialize token as null
        token: localStorage.getItem('token') || '', // Initialize token from localStorage or as an empty string
    }),
    getters: {
        getToken: (state) => state.token, // Getter to access the token from the state
    },
    actions: {
        setToken(token) {
            this.token = token; // Mutate the state to set the token
            localStorage.setItem('token', token); // Store token in localStorage
        },
        clearToken() {
            this.token=''; // Mutate the state to clear the token
            localStorage.removeItem('token'); // Remove token from localStorage
        },
    },
});

// Create an instance of the store
export const authStore = createPinia(useAuthStore);
