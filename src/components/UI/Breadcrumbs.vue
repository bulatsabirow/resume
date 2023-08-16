<script setup>
const props = defineProps({
    breadcrumbs: {type: Array[String]}
})
</script>

<template>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li v-for="breadcrumb in breadcrumbs" class="breadcrumb-item text-purple">
                <span class="breadcrumb-text">{{ breadcrumb }}</span>
            </li>
        </ol>
    </nav>
</template>

<style scoped>
    .breadcrumb-text {
        color: var(--bs-purple) !important;
        font-family: "Roboto Mono", monospace;
    }
</style>