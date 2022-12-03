<template>
  <div class="">
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
