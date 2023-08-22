<script setup>
import { RouterView } from 'vue-router'
import { useI18n } from 'vue-i18n'
const { t } = useI18n({ useScore: 'global' })
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
