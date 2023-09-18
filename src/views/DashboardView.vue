<template>
  <div class="flex bg-gray-100 min-h-screen">
    <aside class="hidden sm:flex sm:flex-col">
      <a href="#"
        class="inline-flex items-center justify-center h-20 w-20 bg-purple-600 hover:bg-purple-500 focus:bg-purple-500">
        <svg fill="none" viewBox="0 0 64 64" class="h-12 w-12">
          <title>Company logo</title>
          <path
            d="M32 14.2c-8 0-12.9 4-14.9 11.9 3-4 6.4-5.6 10.4-4.5 2.3.6 4 2.3 5.7 4 2.9 3 6.3 6.4 13.7 6.4 7.9 0 12.9-4 14.8-11.9-3 4-6.4 5.5-10.3 4.4-2.3-.5-4-2.2-5.7-4-3-3-6.3-6.3-13.7-6.3zM17.1 32C9.2 32 4.2 36 2.3 43.9c3-4 6.4-5.5 10.3-4.4 2.3.5 4 2.2 5.7 4 3 3 6.3 6.3 13.7 6.3 8 0 12.9-4 14.9-11.9-3 4-6.4 5.6-10.4 4.5-2.3-.6-4-2.3-5.7-4-2.9-3-6.3-6.4-13.7-6.4z"
            fill="#fff" />
        </svg>
      </a>
      <div class="flex-grow flex flex-col justify-between text-gray-500 bg-gray-800">
        <nav class="flex flex-col mx-4 my-6 space-y-4">
          <a href="#"
            class="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
            <span class="sr-only">Folders</span>
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
          </a>
          <a href="#" class="inline-flex items-center justify-center py-3 text-purple-600 bg-white rounded-lg">
            <span class="sr-only">Dashboard</span>
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </a>
          <a href="#"
            class="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
            <span class="sr-only">Messages</span>
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
          <a href="#"
            class="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
            <span class="sr-only">Documents</span>
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </a>
        </nav>
        <div class="inline-flex items-center justify-center h-20 w-20 border-t border-gray-700">
          <button class="p-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
            <span class="sr-only">Settings</span>
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        </div>
      </div>
    </aside>
    <div class="flex-grow text-gray-800">
      <header class="flex items-center h-20 px-6 sm:px-10 bg-white">
        <button
          class="block sm:hidden relative flex-shrink-0 p-2 mr-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800 focus:bg-gray-100 focus:text-gray-800 rounded-full">
          <span class="sr-only">Menu</span>
          <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </button>
        <div class="relative w-full max-w-md sm:-ml-2">
          <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor"
            class="absolute h-6 w-6 mt-2.5 ml-2 text-gray-400">
            <path fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd" />
          </svg>
          <input type="text" role="search" placeholder="Search..."
            class="py-2 pl-10 pr-4 w-full border-4 border-transparent placeholder-gray-400 focus:bg-gray-50 rounded-lg" />
        </div>
        <div class="flex flex-shrink-0 items-center ml-auto">
          <button class="inline-flex items-center p-2 hover:bg-gray-100 focus:bg-gray-100 rounded-lg">
            <span class="sr-only">User Menu</span>
            <div class="hidden md:flex md:flex-col md:items-end md:leading-tight">
              <span class="font-semibold">Grace Simmons</span>
              <span class="text-sm text-gray-600">Lecturer</span>
            </div>
            <span class="h-12 w-12 ml-2 sm:ml-3 mr-2 bg-gray-100 rounded-full overflow-hidden">
              <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="user profile photo"
                class="h-full w-full object-cover">
            </span>
            <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" class="hidden sm:block h-6 w-6 text-gray-300">
              <path fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd" />
            </svg>
          </button>
          <div class="border-l pl-3 ml-3 space-x-1">
            <button
              class="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
              <span class="sr-only">Notifications</span>
              <span class="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full"></span>
              <span class="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full animate-ping"></span>
              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <button
              class="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full"
              @click="logoutButtonClick">
              <span class="sr-only">Log out</span>
              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <main class="p-6 sm:p-10 space-y-6">
        <div class="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
          <div class="mr-6">
            <h1 class="text-4xl font-semibold mb-2">Dashboard</h1>
            <h2 class="text-gray-600 ml-0.5">Mobile UX/UI Design course</h2>
          </div>
          <div class="flex flex-wrap items-start justify-end -mb-3">

            <button
              class="inline-flex px-5 py-3 text-white bg-purple-600 hover:bg-purple-700 focus:bg-purple-700 rounded-md ml-6 mb-3"
              @click="openModal">
              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                class="flex-shrink-0 h-6 w-6 text-white -ml-1 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add Book
            </button>
          </div>
        </div>
        <!-- <section class="grid md:grid-cols-2 xl:grid-cols-6 gap-6"> -->
        <section class="grid md:grid-cols-2 xl:grid-cols-1 xl:grid-flow-col ">
          <div class="flex items-center p-8 bg-white shadow rounded-lg">
            <!-- component -->
            <!-- This is an example component -->
            <div class="max-w-2xl mx-auto">

              <div class="flex flex-col">
                <div class="overflow-x-auto shadow-md sm:rounded-lg">
                  <div class="inline-block min-w-full align-middle">
                    <div class="overflow-hidden ">
                      <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                        <thead class="bg-gray-100 dark:bg-gray-700">
                          <tr>

                            <th scope="col"
                              class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                              Book Name
                            </th>
                            <th scope="col"
                              class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                              Price
                            </th>
                            <th scope="col"
                              class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                              Pages
                            </th>
                            <th scope="col" class="p-4">
                              <span class="sr-only">Edit</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                          <tr class="hover:bg-gray-100 dark:hover:bg-gray-700" v-for="book in books">

                            <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              {{ book.title }}</td>
                            <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                              ${{ book.price }}</td>
                            <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              {{ book.pages }}</td>
                            <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                              <a class="text-blue-600 dark:text-blue-500 hover:underline"
                                @click="edit_book(book)">Edit</a> ||
                              <a class="text-blue-600 dark:text-blue-500 hover:underline"
                                @click="delete_book(book._id)">delete</a>
                            </td>
                          </tr>


                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>
    </div>
  </div>
  <div class="modalll">
    <div v-if="showModal"
      class="main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster"
      style="background: rgba(0,0,0,.7);">
      <div
        class="border border-teal-500 shadow-lg modal-container bg-white w-11/12 md:max-w-md mx-auto rounded z-50 overflow-y-auto">
        <div class="modal-content py-4 text-left px-6">
          <div class="flex justify-between items-center pb-3">
            <p class="text-2xl font-bold">Book</p>
            <div class="modal-close cursor-pointer z-50" @click="modalClose">
              <svg class="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                viewBox="0 0 18 18">
                <path
                  d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
                </path>
              </svg>
            </div>
          </div>
          <form class="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8">

            <div>
              <label for="book_name" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Book
                Name</label>
              <input type="text" name="book_name" id="book_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="name" required="" v-model="book_name">
            </div>
            <div>
              <label for="book_price" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Book
                Price</label>
              <input type="text" name="book_price" id="book_price" placeholder="price"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required="" v-model="book_price">
            </div>
            <div>
              <label for="book_pages"
                class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Pages</label>
              <input type="text" name="book_pages" id="book_pages" placeholder="pages"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required="" v-model="book_pages">
            </div>


            <div class="flex justify-end pt-2">
              <button class="focus:outline-none modal-close px-4 bg-gray-400 p-3 rounded-lg text-black hover:bg-gray-300"
                @click="modalClose">Cancel</button>
              <button class="focus:outline-none px-4 bg-teal-500 p-3 ml-3 rounded-lg text-white hover:bg-teal-400"
                type="button" v-if="!is_edit" @click="add_book">Add</button>
              <button class="focus:outline-none px-4 bg-teal-500 p-3 ml-3 rounded-lg text-white hover:bg-teal-400"
                type="button" v-if="is_edit" @click="update_book">Edit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardView',
  // components: {
  //     RegistrationComponet
  // }
  data() {
    return {
      books: [],
      showModal: false,
      book_name: '',
      book_price: '',
      book_pages: '',
      is_edit: false,
      current_book: ''
    };
  },
  mounted() {
    // This function will be executed when the component is mounted.
    this.loadFunction();
  },
  methods: {
    async loadFunction() {
      try {
        const response = await this.$axios.get('/api/books');
        const responseData = response.data
        this.books = responseData.data

      } catch (error) {
        console.error('Login failed:', error);
        // Handle login error, e.g., show an error message.
      }
    },
    logoutButtonClick() {
      try {
        console.log("-------Logout--------- 🙂💔");
        this.$store.clearToken();
        this.$router.push('/');

      } catch (error) {
        console.error('Login failed:', error);
        // Handle login error, e.g., show an error message.
      }
    },
    modalClose() {
      this.showModal = false;
    },
    openModal() {
      this.showModal = true;
      this.is_edit = false;
      this.book_name = '';
      this.book_price = '';
      this.book_pages = '';

      this.current_book = '';
    },
    async add_book() {
      try {
        if (!this.book_name || !this.book_price || !this.book_pages) {
          console.error('Books have some required.');
          // You can show an error message or take appropriate action
          return; // Exit the function early
        }

        const response = await this.$axios.post('/api/books', {
          title: this.book_name,
          price: this.book_price,
          pages: this.book_pages
        });
        const responseData = response.data

        if (response.status === 200) {
          // Successful login, store the token and redirect to the dashboard
          if (responseData.status) {
            // localStorage.setItem('tokenn', responseData.data.token);
            this.$showSweetAlert('success', responseData.message);

            // setTimeout(() => {
            //     this.$router.push('/');
            // }, 2000);
            this.showModal = false;
            this.book_name = '';
            this.book_price = '';
            this.book_pages = '';
            this.is_edit = false;
            this.current_book = '';

            this.loadFunction();

          } else {
            this.$showSweetAlert('error', responseData.message);
          }

        } else {
          // console.error('Login failed: Unexpected status code', response.status);
          this.$showSweetAlert('error', responseData.message);
        }

      } catch (error) {
        console.error('Login failed:', error);
        // Handle login error, e.g., show an error message.
      }
    },
    edit_book(book) {
      this.showModal = true;
      this.book_name = book.title;
      this.book_price = book.price;
      this.book_pages = book.pages;
      this.is_edit = true;
      this.current_book = book._id
    },
    async update_book() {
      try {
        if (!this.book_name || !this.book_price || !this.book_pages) {
          console.error('Books have some required.');
          // You can show an error message or take appropriate action
          return; // Exit the function early
        }

        const response = await this.$axios.put('/api/books/' + this.current_book, {
          title: this.book_name,
          price: this.book_price,
          pages: this.book_pages
        });
        const responseData = response.data

        if (response.status === 200) {

          if (responseData.status) {
            this.$showSweetAlert('success', responseData.message);
            this.showModal = false;
            this.book_name = '';
            this.book_price = '';
            this.book_pages = '';
            this.is_edit = false;
            this.current_book = '';

            this.loadFunction();
          } else {
            this.$showSweetAlert('error', responseData.message);
          }

        } else {
          
          this.$showSweetAlert('error', responseData.message);
        }
      } catch (error) {
        console.error('Login failed:', error);
        
      }
    },
    async delete_book(id){
      
     this.$confirmDelete('Delete Book ?','').
     then(x =>
      {
        if (x)
        {
          this.delete_book_process(id)
        }
      });
     
    },
    async delete_book_process(id){
      try {

        const response = await this.$axios.delete('/api/books/' + id, {
        });
        const responseData = response.data

        if (response.status === 200) {

          if (responseData.status) {

            this.$showSweetAlert('success', responseData.message);

            this.loadFunction();
          } else {
            this.$showSweetAlert('error', responseData.message);
          }

        } else {
          // console.error('Login failed: Unexpected status code', response.status);
          this.$showSweetAlert('error', responseData.message);
        }
      } catch (error) {
        console.error('Login failed:', error);
        // Handle login error, e.g., show an error message.
      }
    }


  }
}

</script>

<style>
.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.animated.faster {
  -webkit-animation-duration: 500ms;
  animation-duration: 500ms;
}

.fadeIn {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}

.fadeOut {
  -webkit-animation-name: fadeOut;
  animation-name: fadeOut;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}
</style>