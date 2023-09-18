<template>
  <!-- component -->
  <div class="min-h-min bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <div
        class="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
      </div>
      <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
        <div class="max-w-md mx-auto">
          <div>
            <h1 class="text-2xl font-semibold">Express + NodeJS + MongoDB+ VueJS +Tailwind CSS</h1>
          </div>
          <div class="divide-y divide-gray-200">
            <form @submit.prevent="login">
              <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div class="relative">
                  <input autocomplete="off" id="email" name="email" type="text"
                    class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Email address" v-model="email" />
                  <label for="email"
                    class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email
                    Address</label>
                </div>
                <div class="relative">
                  <input autocomplete="off" id="password" name="password" type="password"
                    class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Password" v-model="password" />
                  <label for="password"
                    class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                </div>
                <div class="relative">
                  <button type="submit" class="bg-lime-800 text-white rounded-md px-2 py-1">Submit</button>
                </div>
                <div class="relative">
                  <router-link to="/registration">signup</router-link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from '../store/store'; 
export default {
  name: 'LoginComponet',
  setup() {
    
  },
  data() {
    return {
      email: 'keval@admin.com',
      password: '123456',
      books: []
    };
  },
  methods: {
    async login() {
      try {
        if (!this.email || !this.password) {
          console.error('Email and password are required.');
          // You can show an error message or take appropriate action
          return; // Exit the function early
        }
        console.log("login called")
        
        const authStoreInstance = useAuthStore();
        const response = await this.$axios.post('/api/auth/signin', {
          email: this.email,
          password: this.password
        });
        const responseData = response.data

        if (response.status === 200) {
          // Successful login, store the token and redirect to the dashboard
          if (responseData.status) {
            // localStorage.setItem('token', responseData.data.token);
            this.$showSweetAlert('success', responseData.message);

            // this.$store.setToken('newToken');
            // authStoreInstance.setToken('yourAuthToken')
            // console.log("penia",authStoreInstance.getToken)
            
            this.$store.setToken(responseData.data.token);
           
              this.$router.push('/dashboard');
            // setTimeout(() => {
            //   this.$router.push('/dashboard');
            // }, 2000);

            // this.$router.push('/dashboard');
            // router.push('/dashboard');

          } else {
            this.$showSweetAlert('error', responseData.message);
          }

        } else {
          console.error('Login failed: Unexpected status code', response.status);

        }

      } catch (error) {
        console.error('Login failed:', error);
        // Handle login error, e.g., show an error message.
      }
    }
  }
}
</script>

<style scoped></style>
