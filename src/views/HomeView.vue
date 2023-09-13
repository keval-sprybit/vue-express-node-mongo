<template>
  <div class="home">
    <LoginComponet  />
  </div>
</template>

<script>
// @ is an alias to /src
import LoginComponet from '@/components/LoginComponet.vue'

export default {
  name: 'HomeView',
  components: {
    LoginComponet
  }
}
</script>
