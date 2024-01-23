<script setup>
import CircularImage from '@/components/UI/CircularImage.vue'
import HeaderText from '@/components/UI/HeaderText.vue'
import MediaList from '@/components/UI/MediaList.vue'
import CurrentYearRange from '@/components/UI/CurrentYearRange.vue'
//
// import ownerImg from '@/assets/images/1659087797697.jpg'
</script>

<template>
  <aside class="aside-container mt-5 d-flex flex-column justify-content-between align-items-center">
    <div class="flex-item-wrapper d-flex flex-column justify-content-center align-items-center">
      <CircularImage :radius="150" :src="ownerImg"></CircularImage>
      <HeaderText>{{ $t('name') }}</HeaderText>
      <HeaderText header="h4">{{ $t('job') }}</HeaderText>
      <MediaList />
    </div>
    <CurrentYearRange />
  </aside>
</template>

<style scoped>
.aside-container {
  height: calc(100% - 3rem);
}
</style>
