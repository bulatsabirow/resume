<script setup>
import CareerItem from '@/components/UI/CareerItem.vue'
import { companies } from '@/data/companies'

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
      >
        <template #companyName>
          <a
            target="_blank"
            :href="companies[careerItem.identifier].href"
            rel="noopener noreferrer"
            class="text-decoration-none"
          >
            <span :class="companies[careerItem.identifier].styleName">
              {{ careerItem.companyName }}
            </span>
          </a> </template
        >/
      </CareerItem>
    </table>
  </div>
</template>

<style scoped>
table {
  max-width: 100%;
}
</style>
