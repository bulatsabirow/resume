<script setup>
import {computed, ref} from "vue";
import {useRouter} from "vue-router";

const router = useRouter();
const lang = ref(router.currentRoute.value.query.lang);
let languageSwitcherText = computed(() => lang.value === "ru" ? "en" : "ru")

function switchLanguage() {
    lang.value = lang.value === "ru" ? "en" : "ru";
    router.push({name: "About", query: {lang: lang.value}});
}
</script>

<template>
    <button @click="switchLanguage" type="button" class="btn-link btn btn-primary btn-secondary">
        {{ languageSwitcherText }}
    </button>
</template>

<style scoped>

</style>