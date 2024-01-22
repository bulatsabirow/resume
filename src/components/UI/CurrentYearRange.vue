<script setup>
import HeaderText from '@/components/UI/HeaderText.vue'
import {STARTING_YEAR} from '@/utils/consts'

const currentYearRange = (startingYear) => {
  let currYear = new Date().getFullYear()
  if (currYear === startingYear) {
    return currYear
  }

  return `${startingYear}—${currYear}`
}
</script>

<template>
  <HeaderText header="h4">{{ currentYearRange(STARTING_YEAR) }}</HeaderText>
</template>

<style scoped></style>
