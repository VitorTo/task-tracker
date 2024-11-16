<template>
	<header>
		<div class="header-top">
			<div class="img-logo">
				<img src="../assets/logo.png" alt="">
			</div>
			<div class="infos">
				<ThemeToggle @click="alterarTema" />
				<info-user :render="['avatar']"/>
			</div>
		</div>
		<div class="nav-user-name">
			<span class="icon mr-2">
				<i class="fas fa-user"></i>				
			</span>
			<info-user  :render="['name']"/>
		</div>
		<hr class="mt-3">
		<div class="nav-link-list">
			<nav-links />
		</div>
	</header>
</template>

<script lang="ts">
	import { defineComponent } from 'vue'
	import InfoUser from './Base/InfoUser.vue';
	import NavLinks from './Base/NavLinks.vue';
	import ThemeToggle from './Base/ThemeToggle.vue';

	export default defineComponent({
		name: 'BarraLateral',
		emits: ['aoTemaAlterado'],
		components: {
			ThemeToggle,
			NavLinks,
			InfoUser
		},
		data() {
			return {
				modoEscuroAtivo: false
			}
		},
		computed: {
			textoBotao() {
				if (this.modoEscuroAtivo) {
					return 'Desativar modo escuro'
				}
				return 'Ativar modo escuro'
			}
		},
		methods: {
			alterarTema() {
				this.modoEscuroAtivo = !this.modoEscuroAtivo
				this.$emit('aoTemaAlterado', this.modoEscuroAtivo)
			}
		}
	})
</script>

<style scoped>
	header {
		padding: 1rem;
		background: #0d3b66;
		width: 100%;
		height: 100vh;
		text-align: center;
		position: relative;
	}

	@media only screen and (max-width: 768px) {
		header {
			padding: 2.5rem;
			height: auto;
		}
	}

	.header-top {
		display: flex;	
	}
	.img-logo {
		width: 70%;
	}
	.infos {
		width: 30%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.infos .wrapper {
		margin-bottom: .5rem;
	}

	.nav-user-name {
		width: 100%;
		text-align: left;
		font-size: 18px;
		color: #fff;
		display: flex;
	}

</style>
