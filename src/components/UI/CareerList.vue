<script setup>
import CareerItem from '@/components/UI/CareerItem.vue'

const props = defineProps({
  careerList: {
    type: Array[Object[String]]
  }
})
</script>

<template>
  <div class="overflow-x-auto">
    <table class="table">
      <CareerItem
        v-for="[index, careerItem] in Array.prototype.entries.call(props.careerList)"
        :key="index"
        :company-name="careerItem.companyName"
        :description="careerItem.description"
        :year-range="careerItem.yearRange"
      />
    </table>
  </div>
</template>

<style scoped>
table {
  max-width: 100%;
}
</style>
