<script setup>

import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {watch, ref, computed, onMounted} from "vue";
import {darkLightModeCookieName, getCookie, setCookie} from "../../../utils/cookie";
const isChecked = ref(getCookie(darkLightModeCookieName) === 'light');

watch(isChecked, (newState, oldState) => {
    setCookie(darkLightModeCookieName, newState ? 'light' : 'dark');
    document.body.setAttribute("data-bs-theme", getCookie(darkLightModeCookieName));
});
</script>

<template>
    <span v-if="isChecked" @click="isChecked = false" class="me-5">
        <FontAwesomeIcon size="xl" class="icon-moon" :icon="['fas', 'moon']"></FontAwesomeIcon>
    </span>
    <span v-else @click="isChecked = true" class="ms-2">
        <FontAwesomeIcon class="icon-sun" size="xl" :icon="['fas', 'sun']"></FontAwesomeIcon>
    </span>
</template>

<style scoped>

</style>