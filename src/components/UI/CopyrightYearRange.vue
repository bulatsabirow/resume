<script setup>
import {computed} from "vue";
import HeaderText from "@/components/UI/HeaderText.vue";

const creationYear = 2022;
const currentYear = computed(() => {
    let currYear = new Date().getFullYear();
    if (currYear === creationYear) {
        return currYear;
    }

    return `${creationYear}—${currYear}`;
});
</script>

<template>
    <HeaderText size="sm">{{ currentYear }}</HeaderText>
</template>

<style scoped>

</style>