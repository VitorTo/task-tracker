<template>
    <router-link to="/perfil">
        <div class="info-user">
            <div v-if="render.includes('avatar')" class="avatar-user">
                <img :src="user.avatar" alt="Avatar do usuário" />
            </div>
            <div v-if="render.includes('name')" class="name-user">
                {{ user.name }}
            </div>
        </div>
    </router-link>
</template>

<script>
    import { defineComponent } from 'vue';
	import { user } from '@/utils/user';

    export default defineComponent({
        name: 'InfoUser',
        props: {
            render: {
                type: Array
            }
        },
		setup() {
			return {
				user
			}
		},
    })
</script>

<style>
    .avatar-user {
        width: 40px;
        height: 40px;
    }

    .avatar-user img {
        border-radius: 50%;
    }

    .name-user {
        color: #fff;
    }
</style>