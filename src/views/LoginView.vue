<template>
  <div class="fullscreen-login">
    <login-card />
  </div>
</template>

<script>

import LoginCardVue from '@/components/LoginCard.vue';

export default {
  name: 'LoginView',

  components: {
    'login-card': LoginCardVue
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
