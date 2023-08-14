<script setup>
import Breadcrumbs from "@/components/UI/Breadcrumbs.vue";
import {computed} from "vue";
import {calculateAge} from "../../utils/date.js";
import {defineWordEnding} from "../../utils/wordEnding.js";
import HeaderText from "@/components/UI/HeaderText.vue";

const age = computed(() => calculateAge("2003/02/15"));
const breadcrumbs = [`${age.value} ${defineWordEnding(age.value)} `, "Казань"];

</script>

<template>
    <main class="about-me-container d-flex flex-column h-100 w-100">
        <HeaderText size="lg" class="text-white" position="start">Обо мне</HeaderText>
        <Breadcrumbs class="mt-2" :breadcrumbs="breadcrumbs"/>
        <div class="about-me text-white">
            <p class="mb-0 about-me-text text-break lh-lg">
                Я  студент 2 курса ИТИС КФУ.  Несмотря на то что меня небогатый практический опыт разработки, я способен быстро осваивать новые навыки и концентрировать свое внимание ради достижения нужного результата.
            </p>
            <p class="about-me-text text-break lh-lg">
                Нацелен на активное сотрудничество в команде и открыт к новым вызовам.
            </p>
        </div>
    </main>
</template>

<style scoped>
    .about-me-container > * {
        margin-left: 1rem;
    }

    .about-me-text {
        text-indent: 2rem;
    }
</style>