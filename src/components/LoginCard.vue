<template>
	<v-card class="login-card">
		<v-card-header class="login-card-header">
			<p class="display-1 pt-5">Olá Visitante</p>
		</v-card-header>
		<v-card-text>
			<v-form>
				<v-text-field outlined densed label="Login" hint="CPF / E-mail / PIS">

				</v-text-field>
				<v-text-field outlined label="Senha" type="password">

				</v-text-field>
			</v-form>
		</v-card-text>
		<v-divider class="mb-5"></v-divider>
		<v-card-actions class="login-card-actions mb-5 px-5">
			<v-btn><v-icon left>mdi-account-plus</v-icon>Cadastrar</v-btn>
			<v-btn><v-icon left>mdi-login</v-icon>Entrar</v-btn>
		</v-card-actions>
	</v-card>
</template>
<script>
export default {
	data: () => ({

	})
}
</script>
<style scoped lang="scss">
.login-card {
	width: 20rem;
	border-radius: 10px;
	border: 1px grey;
	.login-card-header {
		text-align: center;
	}
	.login-card-actions{
		display: flex;
		justify-content: space-between;
	}
}
</style>