import { reactive } from 'vue'

interface Profile {
    name: string
    email: string
    avatar: string
}

export const user = reactive<Profile>({
    name: 'John Doe',
    email: '',
    avatar: 'https://sm.ign.com/ign_pk/cover/a/avatar-gen/avatar-generations_rpge.jpg'
})

export function setUserProfile(profile: Profile) {
    user.name = profile.name
    user.email = profile.email
    user.avatar = profile.avatar
}