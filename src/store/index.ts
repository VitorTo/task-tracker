import IProjeto from "@/interfaces/IProjeto";
import  INotificacao, { typeNotification } from "@/interfaces/INotificacao";
import { InjectionKey } from 'vue'
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { ADICIONA_NOFITIFACAO, ADICIONA_PROJETO, ALTERA_PROJETO, REMOVE_NOTIFICACAO, REMOVE_PROJETO } from "./typeMutations";

interface Estado {
    projetos: IProjeto[],
    notificacoes: INotificacao[]
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
    state: {
        projetos: [],
        notificacoes: []
    },
    mutations: {
        [ADICIONA_PROJETO](state, nomeProjeto: string) {
            const projeto = {
                id: new Date().getTime().toString(),
                nome: nomeProjeto
            } as IProjeto

            state.projetos.push(projeto)

        },
        [ALTERA_PROJETO](state, projeto: IProjeto) {
            const index = state.projetos.findIndex(proj => proj.id == projeto.id)
            state.projetos[index] = projeto
        },
        [REMOVE_PROJETO](state, id: string) {
            state.projetos = state.projetos.filter(proj => proj.id != id)
        },
        [ADICIONA_NOFITIFACAO](state, notificacao: INotificacao) {
            notificacao.id = new Date().getTime()
            state.notificacoes.push(notificacao)

            setTimeout(() => {
                state.notificacoes = state.notificacoes.filter(not => not.id != notificacao.id)
            }, 5000)
        },
        [REMOVE_NOTIFICACAO](state, id: number) {
            state.notificacoes = state.notificacoes.filter(not => not.id != id)
        }
    }
})

export function useStore(): Store<Estado> {
    return vuexUseStore(key)
}