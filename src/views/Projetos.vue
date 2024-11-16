<template>
    <div>
        <div class="box formulario">
            <div class="columns">
                <form class="column is-8" aria-label="Formulário para criação de um novo projeto"
                    @submit.prevent="salvarProjeto">
                    <input type="text" v-model="novoProjeto" class="input" placeholder="Nome do projeto" />
                </form>
                <div class="column">
                    <button class="button is-fullwidth" @click="adicionarProjeto">Salvar</button>
                </div>
            </div>
        </div>

        <div class="projects-views">
            <table class="table is-fullwidth">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(projeto, index) in projetos" :key="index">
                        <td>{{ projeto.id }}</td>
                        <td>{{ projeto.nome }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "@/store";

export default defineComponent({
    name: "Projetos",
    data() {
        return {
            novoProjeto: ""
        }
    },
    setup() {
        const store = useStore();

        return {
            store,
            projetos: computed(() => store.state.projetos)
        }
    },
    methods: {
        adicionarProjeto() {
            this.store.commit("ADICIONA_PROJETO", this.novoProjeto);
            this.novoProjeto = "";
        },
        salvarProjeto() {
            this.adicionarProjeto();
        }
    }
});
</script>

<style scoped>
.projects-views {
    padding: 1.25rem;
}
</style>
