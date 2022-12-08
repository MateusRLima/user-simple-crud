<template>
  <v-card class="register-card">
    <v-card-title class="register-card-header">
      <v-btn icon @click="$emit('showLogin', false)" dense color="#00647C" class="mr-5"><v-icon>mdi-chevron-left</v-icon></v-btn>
      <p class="display-1 pt-5">Cadastro</p>
      <v-spacer></v-spacer>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col class="register-form-scroll">
            <p>Dados pessoais</p>
            <v-text-field color="#00647C" v-model="nome" outlined dense label="Nome">
            </v-text-field>
            <v-text-field color="#00647C" v-model="email" outlined dense label="E-mail">
            </v-text-field>
            <v-text-field color="#00647C" v-model="senha" outlined dense label="Senha" type="password">
            </v-text-field>
            <v-text-field color="#00647C" v-model="cpf" outlined dense label="CPF">
            </v-text-field>
            <v-text-field color="#00647C" v-model="pis" outlined dense label="PIS">
            </v-text-field>
            <p>Endereço</p>
            <div class="register-card-row">
              <v-text-field class="mr-5" color="#00647C" v-model="cep" outlined dense label="CEP">
              </v-text-field>
              <v-text-field color="#00647C" v-model="pais" outlined dense label="País">
              </v-text-field>
            </div>
            <v-text-field color="#00647C" v-model="estado" outlined dense label="Estado">
            </v-text-field>
            <v-text-field color="#00647C" v-model="municipio" outlined dense label="Município">
            </v-text-field>
            <div class="register-card-row">
              <v-text-field class="mr-5" color="#00647C" v-model="rua" outlined dense label="Rua">
              </v-text-field>
              <v-text-field color="#00647C" v-model="numero" outlined dense label="Número">
              </v-text-field>
            </div>
            <v-text-field color="#00647C" v-model="complemento" outlined dense label="Complemento">
            </v-text-field>
          </v-col>
        </v-row>
      </v-container>

    </v-card-text>
    <v-card-actions class="register-card-actions mb-5 px-7">
      <v-btn @click="registrarUsuario" dense color="#00647C" dark width="100%" class="mb-5">Cadastrar</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database"
import { db } from "../main"
import { auth } from "../main"


export default {
  name: "RegisterCard",

  data: () => ({
    nome: "",
    email: "",
    senha: "",
    cpf: "",
    pis: "",
    cep: "",
    pais: "",
    estado: "",
    municipio: "",
    rua: "",
    numero: "",
    complemento: "",
  }),

  methods: {
    registrarUsuario() {
      createUserWithEmailAndPassword(auth, this.email, this.senha).then(
        () => {
          set(ref(db, 'usuarios/' + auth.currentUser.uid), {
            nome: this.nome,
            email: this.email,
            senha: this.senha,
            cpf: this.cpf,
            pis: this.pis,
            cep: this.cep,
            pais: this.pais,
            estado: this.estado,
            municipio: this.municipio,
            rua: this.rua,
            numero: this.numero,
            complemento: this.complemento ? this.complemento : "Sem complemento"
          })
        },
        (err) => {
          alert("Algo deu errado: " + err)
        }
      )
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

  .register-form-scroll {
    overflow-y: scroll;
    overflow-x: hidden;
    height: 400px;
    box-shadow: inset 0px -60px 65px -55px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
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