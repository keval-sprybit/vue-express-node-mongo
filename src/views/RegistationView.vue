<template>
    <div>
      <RegistrationComponet msg="hey" />
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import RegistrationComponet from '@/components/RegistrationComponet.vue'
  
  export default {
    name: 'HomeView',
    components: {
        RegistrationComponet
    }
  }
  </script>
  