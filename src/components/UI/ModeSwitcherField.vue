<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { watch, ref, computed } from 'vue'
import { darkLightModeCookieName, getCookie, setCookie } from '@/utils/cookie'
const isChecked = ref(getCookie(darkLightModeCookieName) === 'light')

watch(isChecked, (newState, oldState) => {
  setCookie(darkLightModeCookieName, newState ? 'light' : 'dark')
  document.body.setAttribute('data-bs-theme', getCookie(darkLightModeCookieName))
})
const iconClassName = computed(() => `icon-${isChecked.value ? 'sun' : 'moon'}`)
const spanClassName = computed(() => isChecked.value ? 'ms-2' : 'me-5')
const icon = computed(() => ['fas', isChecked.value ? 'sun' : 'moon'])
</script>

<template>
  <span @click="isChecked = !isChecked" :class="spanClassName">
    <FontAwesomeIcon size="xl" :class="iconClassName" :icon="icon"></FontAwesomeIcon>
  </span>
</template>

<style scoped></style>
