<template>
    <div class="ul">
        <div class="li">
            <router-link to="/" class="tag-a-link">
                <span class="icon">
                    <i class="fas fa-tasks"></i>
                </span>
                <span class="has-text-weight-bold">Tarefas</span>
            </router-link>
        </div>
        <div class="li">
            <router-link to="/projetos" class="tag-a-link">
                <span class="icon">
                    <i class="fas fa-project-diagram"></i>
                </span>
                <span class="has-text-weight-bold">Projetos</span>
            </router-link>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'NavLinks'
})
</script>

<style scoped>
.tag-a-link {
    --color-primary: #fff;

    color: var(--color-primary);
    font-size: 20px;
    text-transform: capitalize;

    
    width: 100%;
    display: flex;
    align-items: center;

    text-transform: capitalize;
    padding: .5rem;
    margin-bottom: .5rem;    
}

.tag-a-link:hover {
    background: #FDCF72;
    color: #444444;
    
    border-radius: 25px;
}

.tag-a-link .icon {
    width: 36px;
    height: 36px;
    margin-right: 1rem;
}
</style>