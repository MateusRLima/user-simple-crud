<template>
  <v-card class="edit-card">
    <v-card-title class="edit-card-header">
      <p class="display-1 pt-2 mb-0">Editar</p>
      <v-spacer></v-spacer>
    </v-card-title>
    <v-card-text>
      <v-container class="px-0">
        <v-row>
          <v-col class="edit-form-scroll">
            <p>Dados pessoais</p>
            <v-form v-model="valido" ref="cadastroForm">
              <v-text-field color="#00647C" v-model="nome" outlined dense label="Nome" :rules="[regras.obrigatorio]">
              </v-text-field>
              <v-text-field color="#00647C" v-model="email" outlined dense label="E-mail"
                :rules="[regras.obrigatorio, regras.email]">
              </v-text-field>
              <v-text-field :append-icon="senhaEscondida ? 'mdi-eye' : 'mdi-eye-off'" v-model="senha"
                :rules="[regras.obrigatorio]" color="#00647C" outlined dense label="Senha"
                :type="senhaEscondida ? 'text' : 'password'" @click:append="senhaEscondida = !senhaEscondida">
              </v-text-field>
              <v-text-field hint="Não precisa colocar pontos ou hífen" v-mask="'###.###.###-##'" color="#00647C"
                v-model="cpf" outlined dense label="CPF" :rules="[regras.obrigatorio]">
              </v-text-field>
              <v-text-field hint="Não precisa colocar pontos ou hífen" v-mask="'###.#####.##-#'" color="#00647C"
                v-model="pis" outlined dense label="PIS" :rules="[regras.obrigatorio]">
              </v-text-field>
              <p>Endereço</p>
              <div class="edit-card-row">
                <v-text-field hint="Não precisa colocar pontos ou hífen" class="mr-5" v-mask="'#####-###'"
                  color="#00647C" v-model="cep" outlined dense label="CEP" :rules="[regras.obrigatorio]">
                </v-text-field>
                <v-text-field color="#00647C" v-model="pais" outlined dense label="País" :rules="[regras.obrigatorio]">
                </v-text-field>
              </div>
              <v-text-field color="#00647C" v-model="estado" outlined dense label="Estado"
                :rules="[regras.obrigatorio]">
              </v-text-field>
              <v-text-field color="#00647C" v-model="municipio" outlined dense label="Município"
                :rules="[regras.obrigatorio]">
              </v-text-field>
              <div class="edit-card-row">
                <v-text-field class="mr-5" color="#00647C" v-model="rua" outlined dense label="Rua"
                  :rules="[regras.obrigatorio]">
                </v-text-field>
                <v-text-field color="#00647C" v-model="numero" outlined dense label="Número"
                  :rules="[regras.obrigatorio]">
                </v-text-field>
              </div>
              <v-text-field color="#00647C" v-model="complemento" outlined dense label="Complemento"
                :rules="[regras.obrigatorio]">
              </v-text-field>
            </v-form>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions class="edit-card-actions mb-2 px-7">
      <span class="caption mb-2">
        {{ mensagem }}
      </span>
      <v-btn @click="editarUsuario" dense color="#00647C" dark width="100%" class="mb-5">Editar</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>

import { getDatabase, ref, child, get, update } from "firebase/database";
import { updateEmail, updatePassword } from "firebase/auth";
import { db, auth } from "@/main"

export default {
  name: "EditCard",

  data: () => ({
    nome: "",
    email: "",
    senha: "",
    senhaEscondida: false,
    cpf: "",
    pis: "",
    cep: "",
    pais: "",
    estado: "",
    municipio: "",
    rua: "",
    numero: "",
    complemento: "",
    regras: {
      obrigatorio: v => !!v || 'Campo obrigatório',
      email: v => /.+@.+\..+/.test(v) || 'E-mail precisa ser válido'
    },
    valido: false,
    usuarioEditado: {
      nome: '',
    },
    usuarioId: "",
    mensagem: ""
  }),

  mounted() {
    this.usuarioId = auth.currentUser.uid
    const dbRef = ref(getDatabase());

    get(child(dbRef, `usuarios/${this.usuarioId}`)).then((usuario) => {
      if (usuario.exists()) {
        this.nome = usuario.val().nome;
        this.pis = usuario.val().pis;
        this.pais = usuario.val().pais;
        this.cpf = usuario.val().cpf;
        this.cep = usuario.val().cep;
        this.email = usuario.val().email;
        this.senha = usuario.val().senha;
        this.estado = usuario.val().estado;
        this.municipio = usuario.val().municipio;
        this.rua = usuario.val().rua;
        this.numero = usuario.val().numero;
        this.complemento = usuario.val().complemento;
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  },

  methods: {
    editarUsuario() {
      this.usuarioEditado.nome = this.nome;
      this.usuarioEditado.pis = this.pis;
      this.usuarioEditado.pais = this.pais;
      this.usuarioEditado.cpf = this.cpf;
      this.usuarioEditado.cep = this.cep;
      this.usuarioEditado.email = this.email;
      this.usuarioEditado.senha = this.senha;
      this.usuarioEditado.estado = this.estado;
      this.usuarioEditado.municipio = this.municipio;
      this.usuarioEditado.rua = this.rua;
      this.usuarioEditado.numero = this.numero;
      this.usuarioEditado.complemento = this.complemento;

      let updates = {}
      updates['usuarios/' + this.usuarioId] = this.usuarioEditado

      console.log(updates)

      if (this.email !== this.usuarioEditado.email) {
        updateEmail(auth.currentUser, this.usuarioEditado.email)

      }

      if (this.senha !== this.usuarioEditado.senha) {
        updatePassword(auth.currentUser, this.usuarioEditado.senha)
      }

      update(ref(db), updates).then(() => {
        this.mensagem = "Edição concluída com sucesso"
      }).catch(() => {
        this.mensagem = "Ocorreu um problema"
      })
    }
  }
}
</script>
<style scoped lang="scss">
.edit-card {
  width: 100%;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;

  .edit-card-header {
    text-align: center;
    color: #00647C;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .edit-form-scroll {
    overflow-y: scroll;
    overflow-x: hidden;
    height: 400px;
    box-shadow: inset 0px -60px 65px -55px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
  }

  .edit-card-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .edit-card-actions {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>