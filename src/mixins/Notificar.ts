import { typeNotification } from "@/interfaces/INotificacao";
import { ADICIONA_NOFITIFACAO } from "@/store/typeMutations";
import { store } from "@/store";

export const NotificacaoMixin = {
    methods: {
        notificar(title: string, message: string, typeNotification: typeNotification) : void {
            store.commit(ADICIONA_NOFITIFACAO, {
                title,
                message,
                type: typeNotification,
            });
        }
    },
}