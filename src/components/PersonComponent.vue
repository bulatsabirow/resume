<script setup>
import {computed} from "vue";
const currentYear = computed(() => new Date().getFullYear())

import CircularImage from "@/components/UI/CircularImage.vue";
import SelfTypingText from "@/components/UI/SelfTypingText.vue";
import HeaderText from "@/components/UI/HeaderText.vue";
import UnorderedList from "@/components/UI/MediaList.vue";
</script>

<template>
    <aside class="aside-container mt-5 d-flex flex-column justify-content-between align-items-center">
        <div class="flex-item-wrapper d-flex flex-column justify-content-center align-items-center">
            <CircularImage :radius="150" src="/src/assets/1659087797697.jpg"></CircularImage>
            <SelfTypingText/>
            <HeaderText size="md">Fullstack developer</HeaderText>
            <UnorderedList></UnorderedList>
        </div>
        <HeaderText size="sm">{{ currentYear }}</HeaderText>
    </aside>
</template>

<style scoped>
    .aside-container {
        height: calc(100% - 3rem);
    }
</style>