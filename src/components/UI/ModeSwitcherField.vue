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
    <div class="form-check form-switch d-flex flex-row align-items-center">
        <span @click="isChecked = false" class="me-5">
            <FontAwesomeIcon size="xl" class="icon-moon" :icon="['fas', 'moon']"></FontAwesomeIcon>
        </span>
        <input class="mode-switch-input form-check-input" v-model="isChecked" type="checkbox" role="switch">
        <span @click="isChecked = true" class="ms-2">
            <FontAwesomeIcon class="icon-sun" size="xl" :icon="['fas', 'sun']"></FontAwesomeIcon>
        </span>
    </div>
</template>

<style scoped>
    .icon-moon {
        color: var(--bs-body-color);
    }

    .icon-sun {
        color: var(--bs-yellow);
    }

    .mode-switch-input:checked {
        background-color: var(--bs-yellow);
        border-color: var(--bs-yellow);
    }

    .mode-switch-input:focus {
        box-shadow: none;
        border-color: var(--bs-border-color);
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23FFF5F5'/%3e%3c/svg%3e");

    }
</style>