<script setup>
    const props = defineProps({
        src: String,
        radius: Number,
    })
</script>

<template>
    <img class="rounded-circle" :width="props.radius" :height="props.radius" :src="props.src" alt="<no photo>" />
</template>

<style scoped>

</style>