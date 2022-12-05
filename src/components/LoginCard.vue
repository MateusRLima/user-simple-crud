<template>
	<v-card class="login-card">
		<v-card-header class="login-card-header">
			<p class="display-1 pt-5">Olá visitante</p>
		</v-card-header>
		<v-card-text>
			<v-form>
				<v-text-field color="#00647C" outlined dense label="Login" hint="CPF / E-mail / PIS">
				</v-text-field>
				<v-text-field color="#00647C" outlined dense label="Senha" type="password">
				</v-text-field>
			</v-form>
		</v-card-text>
		<v-card-actions class="login-card-actions mb-5 px-5">
			<v-btn @click="authLogin" dense color="#00647C" dark width="100%" class="mb-5">Entrar</v-btn>
			<span>Não possui cadastro? <a @click="$emit('showRegister', true)" class="register-link">Cadastre-se</a></span>
		</v-card-actions>
	</v-card>
</template>
<script>
export default {
	name: "LoginCard",

	data: () => ({
		login: "",
		password: "",
	}),

	methods: {
		authLogin(){
			this.$router.push("/about")
		}
	}
}
</script>
<style scoped lang="scss">

.login-card {
	width: 20rem;
	background-color: #FAFAFA;

	.login-card-header {
		text-align: center;
		color: #00647C;
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