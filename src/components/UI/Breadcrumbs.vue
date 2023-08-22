<script setup>
const props = defineProps({
  breadcrumbs: { type: Array[String] }
})
</script>

<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li v-for="{ key, val } in props.breadcrumbs" class="breadcrumb-item text-purple">
        <span v-if="key === 'age'" class="breadcrumb-text">{{ $t('breadcrumbs.age', val) }}</span>
        <span v-else class="breadcrumb-text">{{ $t(`breadcrumbs.${key}`) }}</span>
      </li>
    </ol>
  </nav>
</template>

<style scoped>
.breadcrumb-text {
  color: var(--bs-purple) !important;
  font-family: 'Roboto Mono', monospace;
}
</style>
