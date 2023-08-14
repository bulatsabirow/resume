<script setup>
const allowedSizes =  ['xl', 'lg', 'md', 'sm', 'xs', 'xxs'];
const props = defineProps({
    size: {
        type: String,
        default: 'lg'
    },
    position: {
        type: String,
        default: 'center',
    }
})
</script>

<template>
    <div class="d-inline" v-if="size === 'xl'">
        <h1 :class="`text-${position}` + ' header-text mt-4'">
            <slot></slot>
        </h1>
    </div>
    <div class="d-inline" v-else-if="size === 'lg'">
        <h2 :class="`text-${position}` + ' header-text mt-4'">
            <slot></slot>
        </h2>
    </div>
    <div class="d-inline" v-else-if="size === 'md' || !allowedSizes.includes(size)">
        <h3 :class="`text-${position}` + ' header-text mt-4'">
            <slot></slot>
        </h3>
    </div>
    <div class="d-inline" v-else-if="size === 'sm'">
        <h4 :class="`text-${position}` + ' header-text mt-4'">
            <slot></slot>
        </h4>
    </div>
    <div class="d-inline" v-else-if="size === 'xs'">
        <h5 :class="`text-${position}` + ' header-text mt-4'">
            <slot></slot>
        </h5>
    </div>
    <div class="d-inline" v-else>
        <h6 :class="`text-${position}` + ' header-text mt-4'">
            <slot></slot>
        </h6>
    </div>
</template>

<style scoped>
    .header-text {
        font-family: "Roboto Mono", monospace;
    }
</style>