<script setup>
const props = defineProps({
  yearRange: {
    type: String,
    required: true
  },
  companyName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>

<template>
  <tr>
    <td class="text-center pb-3">
      {{ props.companyName }}
    </td>
    <td class="text-center text-body-tertiary px-2 pb-3">
      {{ props.yearRange }}
    </td>
    <td class="pb-3">
      {{ props.description }}
    </td>
  </tr>
</template>

<style scoped>
tr > td {
  min-width: 8rem;
}
</style>
