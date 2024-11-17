<template>
    <section class="projects-views">
        <h1 class="title">Projetos</h1>
        <article>
            <router-view />
        </article>
    </section>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Projetos',
});
</script>

<style scoped>
.projects-views {
    padding: 1.25rem;
}
.title {
    font-size: 20pt;
    margin-bottom: 1rem;
}
</style>