<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import ModeSwitcherField from '@/components/UI/ModeSwitcherField.vue'
import LanguageSwitcherField from '@/components/UI/LanguageSwitcherField.vue'
</script>

<template>
  <footer class="p-3 border-top d-flex flex-row justify-content-between align-items-center">
    <div class="d-inline-flex flex-row footer-left-side">
      <LanguageSwitcherField></LanguageSwitcherField>
      <ModeSwitcherField class="ms-4"></ModeSwitcherField>
    </div>
    <a
      class="text-decoration-underline text-body"
      target="_blank"
      href="https://github.com/bulatsabirow/resume"
    >
      <FontAwesomeIcon :icon="['fas', 'arrow-up-right-from-square']" />
      {{ $t('sourceCode') }}
    </a>
  </footer>
</template>

<style scoped></style>
