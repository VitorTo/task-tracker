import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import Tarefas from "@/views/Tarefas.vue"
import Projetos from "@/views/Projetos.vue"
import Profile from "@/views/Profile.vue"

const rotas: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Tarefas',
        component: Tarefas
    },
    {
        path: '/projetos',
        name: 'Projetos',
        component: Projetos
    },
    {
        path: '/perfil',
        name: 'Profile',
        component: Profile
    },
]

const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})


export default roteador
