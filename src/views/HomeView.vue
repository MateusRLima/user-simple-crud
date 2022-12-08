<template>
  <div class="fullscreen-login">
    <v-container>
      <v-row>
        <v-toolbar class="mb-10" dense rounded>
          <v-spacer></v-spacer>
          <v-toolbar-title>Olá {{ nomeUsuario }} </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn @click="deslogarUsuario" icon color="#00647C"><v-icon>mdi-logout</v-icon></v-btn>
        </v-toolbar>
      </v-row>
      <v-row>
        <v-card>

        </v-card>
      </v-row>
    </v-container>
  </div>
</template>
<script>

import { auth } from '@/main';

export default {

  data: () => ({
    nomeUsuario: ""
  }),

  mounted() {
    console.log(auth.currentUser)
    this.nomeUsuario = auth.currentUser.email
  },

  methods: {
    deslogarUsuario(){
      auth.signOut().then(() => {
        this.$router.push('/')
      })
    }
  }
}

</script>
<style>

</style>