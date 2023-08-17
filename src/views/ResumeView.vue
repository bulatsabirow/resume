<script setup>

import PersonComponent from "@/components/PersonComponent.vue";
import AboutMeComponent from "@/components/AboutMeComponent.vue";
</script>

<template>
    <main class="d-flex flex-row main-container w-100 vh-100">
        <div class="row mx-0">
            <div class="person-container h-100 col-3 col-4-xl">
                <PersonComponent/>
            </div>
            <div class="col-9 h-100">
                <AboutMeComponent/>
            </div>
        </div>
    </main>
</template>

<style scoped>
    .person-container {
        background-color: var(--bs-purple);
        max-width: 400px;
        padding-left: 18px;
        padding-right: 12px;
    }
</style>