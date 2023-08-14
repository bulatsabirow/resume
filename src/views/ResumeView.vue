<script setup>

import PersonComponent from "@/components/PersonComponent.vue";
import AboutMeComponent from "@/components/AboutMeComponent.vue";
</script>

<template>
    <main class="d-flex flex-row main-container vh-100 w-100">
        <div class="row w-100 mx-0">
            <div class="person-container h-100 col-3 col-4-xl">
                <PersonComponent/>
            </div>
            <div class="col-9 bg-dark h-100">
                <AboutMeComponent/>
            </div>
        </div>
    </main>
</template>

<style scoped>
    .person-container {
        background-color: var(--bs-purple);
        max-width: 400px;
    }
</style>