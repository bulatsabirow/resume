<script setup>
import CareerItem from '@/components/UI/CareerItem.vue'

const props = defineProps({
  careerList: {
    type: Array[Object[String]]
  }
})
</script>

<template>
  <div class="container">
    <CareerItem
      v-for="careerItem in props.careerList"
      :key="careerItem.yearRange"
      :company-name="careerItem.companyName"
      :description="careerItem.description"
      :year-range="careerItem.yearRange"
    />
  </div>
</template>

<style scoped></style>
