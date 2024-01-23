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
  <div class="row">
    <div class="col text-center">
      {{ props.companyName }}
    </div>
    <div class="col text-center text-body-tertiary">
      {{ props.yearRange }}
    </div>
    <div class="col-6">
      {{ props.description }}
    </div>
  </div>
</template>

<style scoped></style>
