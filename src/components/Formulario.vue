<template>
	<div class="box formulario">
		<div class="columns">
			<div class="column is-5" role="form" aria-label="Formulário para criação de uma nova tarefa">
				<input type="text" class="input" placeholder="Qual tarefa você deseja iniciar?" v-model="descricao" />
			</div>
			<div class="column is-3">
				<div class="select is-fullwidth">
					<select v-model="idProjeto">
						<option value="">Selecione um projeto</option>
						<option v-for="projeto in projetos" :key="projeto.id" :value="projeto.id">
							{{ projeto.nome }}
						</option>
					</select>
				</div>
			</div>
			<div class="column">
				<Temporizador @aoTemporizadorFinalizado="finalizarTarefa" />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import Temporizador from './Temporizador.vue';
import { useStore } from 'vuex';
import { key } from "@/store";
import { typeNotification } from "@/interfaces/INotificacao";
import { NotificacaoMixin } from "@/mixins/Notificar";

	export default defineComponent({
		name: "Formulário",
		emits: ['aoSalvarTarefa'],
		components: {
			Temporizador
		},
		data() {
			return {
				descricao: '',
				idProjeto: ''
			}
		},
		setup() {
			const store = useStore(key);

			return {
				store,
				projetos: computed(() => store.state.projetos)
			}
		},
		mixins: [ NotificacaoMixin ],
		methods: {
			finalizarTarefa(tempoDecorrido: number): void {
				const projeto = this.projetos.find((p) => p.id == this.idProjeto);
				
				if(!projeto) {
					this.notificar("Ops!", "Selecione um projeto antes de finalizar a tarefa!", typeNotification.ERROR);
					return; 
				}

				this.$emit('aoSalvarTarefa', {
					duracaoEmSegundos: tempoDecorrido,
					descricao: this.descricao,
					projeto: projeto
				})
				this.descricao = ''
			},		
		}
	});
</script>
<style>
	.formulario {
		color: var(--texto-primario);
		background-color: var(--bg-primario);
	}
</style>