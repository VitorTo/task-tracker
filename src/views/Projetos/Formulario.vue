<template>
    <div>
        <div class="box formulario">
            <div class="columns">
                <form class="column is-8" aria-label="Formulário para criação de um novo projeto"
                    @submit.prevent="salvarProjeto">
                    <input type="text" v-model="novoProjeto" class="input" placeholder="Nome do projeto" />
                </form>
                <div class="column">
                    <button class="button is-fullwidth" @click="salvarProjeto">Salvar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";
import { ADICIONA_PROJETO, ALTERA_PROJETO } from "@/store/typeMutations";
import { typeNotification } from "@/interfaces/INotificacao";

import useNotificador from "@/hooks/notificador";


export default defineComponent({
    name: "Projetos",
    props: {
        id: String
    },
    mounted(){
        if(this.id){
            const projeto = this.store.state.projetos.find(proj => proj.id == this.id);
            this.novoProjeto = projeto?.nome || '';
        }
    },
    data() {
        return {
            novoProjeto: ""
        }
    },
    setup() {
        const store = useStore();
        const { notificar } = useNotificador(); 
        return {
            store,
            notificar
        }
    },
    methods: {
        salvarProjeto() {
            if(this.id){
                this.store.commit(ALTERA_PROJETO, { id: this.id, nome: this.novoProjeto });
            } else {
                this.store.commit(ADICIONA_PROJETO, this.novoProjeto);
                this.notificar('Projeto salvo com sucesso!', 'Parabéns um novo projeto foi adicionado a lista!', typeNotification.SUCCESS);
        }
            
            this.novoProjeto = "";
            this.$router.push("/projetos");
        }
    }
});
</script>
