<template>
    <div class="notificacoes">
        <article 
            v-for="notificacao in notificacoes" 
            :key="notificacao.id" 
            :class="['message', contextMessage[notificacao.type]]"
        >
            <div class="message-header">
                <p>{{ notificacao.title }}</p>
                <button class="delete" aria-label="delete" @click="removeNotification(notificacao.id)"></button>
            </div>
            <div class="message-body">
                {{ notificacao.message }}
            </div>
        </article>
    </div>
</template>

<script>
import { typeNotification } from '@/interfaces/INotificacao';
import { useStore } from '@/store';
import { computed, defineComponent } from 'vue';

    export default defineComponent({
        name: 'Notificacoes',
        data() {
            return {
                contextMessage: {
                    [typeNotification.SUCCESS]: 'is-success',
                    [typeNotification.ERROR]: 'is-danger',
                    [typeNotification.WARNING]: 'is-warning',
                }
            }
        },
        setup() {
            const store = useStore();
            
            return {
                store,
                notificacoes: computed(() => store.state.notificacoes)
            }
        },
        methods: {
            removeNotification(id) {
                this.store.commit('REMOVE_NOTIFICACAO', id);
            }
        }
    })
</script>

<style>
.notificacoes {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 99;
    padding: 10px;
}
</style>