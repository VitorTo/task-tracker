<template>
    <div class="profile">
        <h1 class="title">Perfil</h1>
        <div class="content-profile">
            <img class="user-avatar" :src="userLocal.avatar" alt="avatar do usuário">
            <div class="user-name-email">
                <span>
                    <strong>
                        {{ userLocal.name }}
                    </strong> 
                </span>
                <span>
                    <strong>
                        {{ userLocal.email }}
                    </strong> 
                </span>
            </div>
        </div>

        <hr>
        <h2 class="title">Editar Perfil</h2>
        <form @submit.prevent="updateProfile">
            <div>
                <label for="name">Nome:</label>
                <input class="input is-normal" id="name" v-model="userLocal.name" type="text" required />
            </div>
            <div>
                <label for="email">Email:</label>
                <input class="input is-normal" id="email" v-model="userLocal.email" type="email" />
            </div>
            <div>
                <label for="avatar">Avatar URL:</label>
                <input class="input is-normal" id="avatar" v-model="userLocal.avatar" type="url" required />
            </div>
            <button class="button is-success" type="submit">Salvar</button>
        </form>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { user, setUser } from '@/utils/user';
import { typeNotification } from '@/interfaces/INotificacao';
import useNotification from '@/hooks/notificador';


export default defineComponent({
    name: 'Profile',
    data() {
        return {
            userLocal: {
                name: '',
                email: '',
                avatar: '',
            },
        };
    },
    setup() {
        const { notificar } = useNotification();
        return {
            notificar
        };
    },
    mounted() {
        this.userLocal = user;
    },
    methods: {
        updateProfile() {
            this.notificar('Parabéns!', 'Perfil atualizado com sucesso!', typeNotification.SUCCESS);
            setUser(this.userLocal);
        },
    },
});


</script>

<style scoped>
    .profile {
        padding: 1.5rem;
    }

    label {
        display: block;
        margin-bottom: 5px;
    }

    input {
        width: 100%;
        padding: 8px;
        margin-bottom: 15px;
    }

    button {
        padding: 10px 20px;
    }

    .title {
        font-size: 20pt;
        margin-bottom: 1rem;
    }

    .content-profile {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .user-avatar {
        width: 100%;
        max-width: 130px;
            
        border-radius: 50%;
        border: 5px solid #0D3B66;
    }
    .user-name-email span strong{
        color: #0D3B66;
        font-size: 16pt;
    }
</style>