<script setup>

import CircularImage from "@/components/UI/CircularImage.vue";
import SelfTypingText from "@/components/UI/SelfTypingText.vue";
import HeaderText from "@/components/UI/HeaderText.vue";
</script>

<template>
    <aside class="mt-5 d-flex flex-column justify-content-center align-items-center">
        <CircularImage :radius="150" src="/src/assets/1659087797697.jpg"></CircularImage>
        <SelfTypingText/>
        <HeaderText>Fullstack developer</HeaderText>
    </aside>
</template>

<style scoped>
</style>