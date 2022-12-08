<template>
  <div class="fullscreen-login">
    <v-container>
      <v-row>
        <v-toolbar class="mb-10 home-toolbar" dense rounded>
          <v-spacer></v-spacer>
          <v-toolbar-title>
            <p class="display-1 mb-0 home-toolbar-title">
              Bem vindo, {{ nomeUsuario.substring(0, nomeUsuario.indexOf(' ')) }}
            </p>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn @click="deslogarUsuario" icon color="#00647C"><v-icon>mdi-logout</v-icon></v-btn>
        </v-toolbar>
      </v-row>
      <v-row>
        <EditCard />
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { getDatabase, ref, child, get } from "firebase/database";
import { auth } from "@/main"
import EditCard from "@/components/EditCard.vue"

export default {

  data: () => ({
    nomeUsuario: "",
    usuario: {
      nome: "",
    }
  }),

  components: {
    EditCard,
  },

  mounted() {
    let usuario = auth.currentUser.uid
    const dbRef = ref(getDatabase());
    get(child(dbRef, `usuarios/${usuario}`)).then((usuario) => {
      if (usuario.exists()) {
        this.nomeUsuario = usuario.val().nome;
      }
    }).catch((error) => {
      console.error(error);
    });
  },

  methods: {
    deslogarUsuario() {
      auth.signOut().then(() => {
        this.$router.push('/')
      })
    }
  }
}

</script>
<style lang="scss">
.home-toolbar {
  width: 100%;
  background: rgba(255, 255, 255, 0.85) !important;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;

  .home-toolbar-title {
    color: #00647C
  }
}
</style>