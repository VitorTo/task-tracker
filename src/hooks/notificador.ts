import { typeNotification } from "@/interfaces/INotificacao"
import { store } from "@/store"
import { ADICIONA_NOFITIFACAO } from "@/store/typeMutations"


type Notificador = {
    notificar: (title: string, message: string, type: typeNotification) => void
}

export default () : Notificador => {

    const notificar = (title: string, message: string, type: typeNotification) : void  => {
        store.commit(ADICIONA_NOFITIFACAO, {
            title,
            message,
            type
        })
    }

    return {
        notificar
    }
}