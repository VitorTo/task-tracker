<template>
    <div class="profile">
        <h2>Editar Perfil</h2>
        <form @submit.prevent="updateProfile">
            <div>
                <label for="name">Nome:</label>
                <input id="name" v-model="userLocal.name" type="text" required />
            </div>
            <div>
                <label for="email">Email:</label>
                <input id="email" v-model="userLocal.email" type="email" required />
            </div>
            <div>
                <label for="avatar">Avatar URL:</label>
                <input id="avatar" v-model="userLocal.avatar" type="url" required />
            </div>
            <button type="submit">Salvar</button>
        </form>
    </div>
</template>

<script>
    import { defineComponent } from 'vue';
    import { user, setUser } from '@/utils/user';

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
    mounted() {
        this.userLocal = user;
    },
    methods: {
        updateProfile() {
            alert('Perfil atualizado com sucesso!');
            setUser(this.userLocal);
        },
    },
});


</script>

<style scoped>
    .profile {
        max-width: 400px;
        margin: auto;
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
</style>