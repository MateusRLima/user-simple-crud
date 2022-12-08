<template>
	<v-card class="login-card">
		<v-card-title class="login-card-header">
			<p class="display-1 pt-5">Olá visitante</p>
		</v-card-title>
		<v-card-text>
			<v-form>
				<v-text-field v-model="login" color="#00647C" outlined dense label="Login" hint="CPF / E-mail / PIS">
				</v-text-field>
				<v-text-field v-model="senha" color="#00647C" outlined dense label="Senha" type="password">
				</v-text-field>
			</v-form>
		</v-card-text>
		<v-card-actions class="login-card-actions mb-5 px-5">
			<v-btn @click="loginUsuario" dense color="#00647C" dark width="100%" class="mb-5">Entrar</v-btn>
			<span>Não possui cadastro? <a @click="$emit('showRegister', true)" class="register-link">Cadastre-se</a></span>
		</v-card-actions>
	</v-card>
</template>
<script>
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../main"

export default {
	name: "LoginCard",

	data: () => ({
		login: "",
		senha: "",
	}),

	methods: {
		loginUsuario(){
			signInWithEmailAndPassword(auth, this.login, this.senha)
			.then((credencialUsuario) => {
				console.log(credencialUsuario)
				this.$router.push("/home")
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

.login-card {
	width: 20rem;
	background-color: #FAFAFA;

	.login-card-header {
		color: #00647C;
		justify-content: center;
	}
	.login-card-actions {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		.register-link{
			color:#00647C;
			&:hover{
				text-decoration: underline
			}
		}
	}
}
</style>