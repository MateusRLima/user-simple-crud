<template>
	<v-card class="login-card">
		<v-card-title class="login-card-header">
			<p class="display-1 pt-5">Olá visitante</p>
		</v-card-title>
		<v-card-text>
			<v-form ref="loginForm" v-model="valido">
				<v-text-field v-model="email" :rules="emailRegras" color="#00647C" outlined dense label="E-mail">
				</v-text-field>
				<v-text-field :append-icon="senhaEscondida ? 'mdi-eye' : 'mdi-eye-off'" v-model="senha" :rules="senhaRegras"
					color="#00647C" outlined dense label="Senha" :type="senhaEscondida ? 'text' : 'password'"
					@click:append="senhaEscondida = !senhaEscondida">
				</v-text-field>
			</v-form>
			<p class="caption red--text ma-0 text-center">{{ mensagemErro }}</p>
		</v-card-text>
		<v-card-actions class="login-card-actions mb-5 px-5">
			<v-btn @click="logarUsuario" dense color="#00647C" dark width="100%" class="mb-5">Entrar</v-btn>
			<span>Não possui cadastro? <a @click="$emit('showRegister', true)" class="register-link">Cadastre-se</a></span>
		</v-card-actions>
	</v-card>
</template>
<script>
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/main"

export default {
	name: "LoginCard",

	data: () => ({
		email: "",
		emailRegras: [
			v => !!v || 'E-mail está vázio',
			v => /.+@.+\..+/.test(v) || 'E-mail precisa ser válido',
		],
		senha: "",
		senhaRegras: [
			v => !!v || 'Senha está vázio',
		],
		senhaEscondida: false,
		valido: false,
		mensagemErro: ""
	}),

	methods: {
		logarUsuario() {
			this.valido = this.$refs.loginForm.validate()

			if (this.valido) {
				signInWithEmailAndPassword(auth, this.email, this.senha)
					.then(() => {
						this.$router.push("/home")
					},
						(err) => {
							let errCode = err.code
							switch (errCode) {
								case 'auth/user-not-found':
									this.mensagemErro = "Usuário não existe"
									break;
								case 'auth/wrong-password':
									this.mensagemErro = "E-mail ou senha incorreto"
									break;
								default:
									break;
							}
						}
					)
			}
		}
	}
}
</script>
<style scoped lang="scss">
.login-card {
	width: 20rem;
	background: rgba(255, 255, 255, 0.85);
	backdrop-filter: blur(4px);
	-webkit-backdrop-filter: blur(4px);
	border-radius: 10px;

	.login-card-header {
		color: #00647C;
		justify-content: center;
	}

	.login-card-actions {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: #00647C;

		.register-link {
			color: #00647C;
			font-weight: bold;

			&:hover {
				text-decoration: underline
			}
		}
	}
}
</style>