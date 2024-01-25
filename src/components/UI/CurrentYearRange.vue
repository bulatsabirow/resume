<script setup>
import HeaderText from '@/components/UI/HeaderText.vue'
import { STARTING_YEAR } from '@/utils/consts'
import dayjs from 'dayjs'

const computeCurrentYearRange = (startingYear) => {
  let currYear = dayjs().year()
  return currYear === startingYear ? currYear : `${startingYear}—${currYear}`
}
</script>

<template>
  <HeaderText header="h5">{{ computeCurrentYearRange(STARTING_YEAR) }}</HeaderText>
</template>

<style scoped></style>
