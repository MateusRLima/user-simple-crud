<template>
  <div class="fullscreen-login">
    <LoginCard @showRegister="(show = $event)" v-if="!show" />
    <RegisterCard @showLogin="(show = $event)" v-else />
  </div>
</template>

<script>

import LoginCard from '@/components/LoginCard.vue';
import RegisterCard from '@/components/RegisterCard.vue';

export default {
  name: 'LoginView',

  data: () => ({
    show: false,
  }),

  components: {
    LoginCard,
    RegisterCard
  }
}
</script>

<style>
.fullscreen-login {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
