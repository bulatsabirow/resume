<script setup>
import CircularImage from '@/components/UI/CircularImage.vue'
import HeaderText from '@/components/UI/HeaderText.vue'
import UnorderedList from '@/components/UI/MediaList.vue'
import CopyrightYearRange from '@/components/UI/CopyrightYearRange.vue'
import ownerImg from '@/assets/images/1659087797697.jpg'
</script>

<template>
  <aside class="aside-container mt-5 d-flex flex-column justify-content-between align-items-center">
    <div class="flex-item-wrapper d-flex flex-column justify-content-center align-items-center">
      <CircularImage :radius="150" :src="ownerImg"></CircularImage>
      <HeaderText>{{ $t('name') }}</HeaderText>
      <HeaderText size="md">Fullstack developer</HeaderText>
      <UnorderedList></UnorderedList>
    </div>
    <CopyrightYearRange></CopyrightYearRange>
  </aside>
</template>

<style scoped>
.aside-container {
  height: calc(100% - 3rem);
}
</style>
