<script setup>
const allowedSizes =  ['xl', 'lg', 'md', 'sm', 'xs', 'xxs'];
const props = defineProps({
    size: {
        type: String,
        default: 'lg'
    }
})
</script>

<template>
    <div v-if="size === 'xl'">
        <h1 class="text-center header-text mt-4">
            <slot></slot>
        </h1>
    </div>
    <div v-else-if="size === 'lg'">
        <h2 class="text-center header-text mt-4">
            <slot></slot>
        </h2>
    </div>
    <div v-else-if="size === 'md' || !allowedSizes.includes(size)">
        <h3 class="text-center header-text mt-4">
            <slot></slot>
        </h3>
    </div>
    <div v-else-if="size === 'sm'">
        <h4 class="text-center header-text mt-4">
            <slot></slot>
        </h4>
    </div>
    <div v-else-if="size === 'xs'">
        <h5 class="text-center header-text mt-4">
            <slot></slot>
        </h5>
    </div>
    <div v-else>
        <h6 class="text-center header-text mt-4">
            <slot></slot>
        </h6>
    </div>
</template>

<style scoped>
    .header-text {
        font-family: "Roboto Mono", monospace;
    }
</style>