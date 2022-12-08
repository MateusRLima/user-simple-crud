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
@keyframes bg {
  100% {
    background-size: 4000px 1000px;
  }
}

.fullscreen-login {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('@/assets/bg.svg');
  background-size: 2000px 1000px;
  background-position: -500px 0;
  animation: bg 10s infinite alternate linear;
}
</style>
