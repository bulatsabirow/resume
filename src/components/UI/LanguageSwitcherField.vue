<script setup>
import {computed} from "vue";
import {useRouter} from "vue-router";

const router = useRouter();
let languageSwitcherText = computed(() => router.currentRoute.value.query.lang === "ru" ? "en" : "ru")
</script>

<template>
    <RouterLink class="text-body" :to='{name: "About", query: {lang: languageSwitcherText}}'>
        {{ languageSwitcherText }}
    </RouterLink>
</template>

<style scoped>

</style>