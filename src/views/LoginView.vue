<template>
  <div class="fullscreen-login">
    <login-card @showRegister="(show = $event)" v-if="!show" />
    <register-card @showLogin="(show = $event)" v-else />
  </div>
</template>

<script>

import LoginCardVue from '@/components/LoginCard.vue';
import RegisterCardVue from '@/components/RegisterCard.vue';

export default {
  name: 'LoginView',

  data: () => ({
    show: false,
  }),

  components: {
    'login-card': LoginCardVue,
    'register-card': RegisterCardVue
  }
}
</script>

<style>
.fullscreen-login {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("@/assets/ptt-background.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
