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
  <div class="row w-auto">
    <div class="col-4 col-sm-3 text-center">
      {{ props.companyName }}
    </div>
    <div class="col-4 col-sm-3 text-center text-body-tertiary">
      {{ props.yearRange }}
    </div>
    <div class="col-4 col-sm-6">
      {{ props.description }}
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width: 475px) {
  .row > div {
    text-wrap: normal;
    word-break: break-word;
  }
}
</style>
