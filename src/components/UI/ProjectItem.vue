<script setup>
const props = defineProps({
  projectName: {
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
    <td class="text-center pb-3" v-html="props.projectName"></td>
    <td class="pb-3" v-html="props.description"></td>
  </tr>
</template>

<style scoped>
tr > td {
  min-width: 8rem;
}
</style>
