import { reactive } from 'vue'

interface Profile {
    nome: string
    email: string
    avatar: string
}

export const user = reactive<Profile>({
    nome: 'John Doe',
    email: '',
    avatar: 'https://sm.ign.com/ign_pk/cover/a/avatar-gen/avatar-generations_rpge.jpg'
})

export function setUserProfile(profile: Profile) {
    user.nome = profile.nome
    user.email = profile.email
    user.avatar = profile.avatar
}