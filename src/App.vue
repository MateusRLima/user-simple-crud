<template>
  <v-app>
    <router-view class="app" />
  </v-app>
</template>

<style lang="scss">
@keyframes bg {
  100% {
    background-size: 4000px 1000px;
  }
}

.app {
  background-image: url('@/assets/bg.svg');
  background-size: 2000px 1000px;
  background-position: -500px 0;
  animation: bg 10s infinite alternate linear;
}

::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px #FAFAFA;
  background: #FAFAFA;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: #B5B5B5;
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}

::-webkit-scrollbar-thumb:window-inactive {
  background: #00647C;
}
</style>
