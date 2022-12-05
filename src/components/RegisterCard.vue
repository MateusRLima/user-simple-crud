<template>
  <v-card class="register-card">
    <v-card-header class="register-card-header">
      <v-btn icon @click="$emit('showLogin', false)" dense color="#00647C"
        class="mx-5"><v-icon>mdi-chevron-left</v-icon></v-btn>
      <p class="display-1 pt-5">Cadastro</p>
      <v-spacer></v-spacer>
    </v-card-header>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col class="register-form-scroll">
            <p>Dados pessoais</p>
            <v-text-field color="#00647C" outlined dense label="Nome">
            </v-text-field>
            <v-text-field color="#00647C" outlined dense label="E-mail">
            </v-text-field>
            <v-text-field color="#00647C" outlined dense label="CPF">
            </v-text-field>
            <v-text-field color="#00647C" outlined dense label="PIS">
            </v-text-field>
            <v-text-field color="#00647C" outlined dense label="Senha" type="password">
            </v-text-field>
            <p>Endereço</p>
            <v-text-field color="#00647C" outlined dense label="País">
            </v-text-field>
            <v-text-field color="#00647C" outlined dense label="Estado">
            </v-text-field>
            <div class="register-card-row">
              <v-text-field class="mr-5" color="#00647C" outlined dense label="Município">
              </v-text-field>
              <v-text-field color="#00647C" outlined dense label="CEP">
              </v-text-field>
            </div>
            <div class="register-card-row">
              <v-text-field class="mr-5" color="#00647C" outlined dense label="Rua">
              </v-text-field>
              <v-text-field color="#00647C" outlined dense label="Número">
              </v-text-field>
            </div>
            <v-text-field color="#00647C" outlined dense label="Complemento">
            </v-text-field>
          </v-col>
        </v-row>
      </v-container>

    </v-card-text>
    <v-card-actions class="register-card-actions mb-5 px-7">
      <v-btn @click="authLogin" dense color="#00647C" dark width="100%" class="mb-5">Cadastrar</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: "RegisterCard",

  data: () => ({
    login: "",
    password: "",
  }),

  methods: {
    authLogin() {
      this.$router.push("/about")
    }
  }
}
</script>
<style scoped lang="scss">
.register-card {
  width: 40rem;
  background-color: #FAFAFA;

  .register-card-header {
    text-align: center;
    color: #00647C;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .register-form-scroll{
    overflow-y: scroll;
    overflow-x: hidden;
    height: 400px;
  }

  .register-card-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .register-card-actions {
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
  }
}
</style>