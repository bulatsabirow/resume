<script setup>
import Breadcrumbs from "@/components/UI/Breadcrumbs.vue";
import {computed} from "vue";
import {calculateAge} from "../../utils/date.js";
import {defineWordEnding} from "../../utils/wordEnding.js";
import HeaderText from "@/components/UI/HeaderText.vue";
import SkillsList from "@/components/UI/SkillsList.vue";
import ModeSwitcherField from "@/components/UI/ModeSwitcherField.vue";

const age = computed(() => calculateAge("2003/02/15"));
const breadcrumbs = [`${age.value} ${defineWordEnding(age.value)} `, "Казань"];
const skills = [{
        icon: ['fab', 'python'],
        title: 'Python',
        color: '#00D846',
    },
    {
        icon: ['fab', 'js'],
        title: 'JavaScript',
        color: '#F0D74D',
    },
    {
        icon: ['fab', 'vuejs'],
        title: 'Vue.js',
        color: '#2CB284',
    },
    {
        icon: ['fab', 'docker'],
        title: 'Docker',
        color: '#016FD0',
    },
]

</script>

<template>
    <main class="px-3 about-me-container d-flex flex-column h-100 w-100">
        <div class="d-flex flex-row justify-content-between align-items-end">
            <HeaderText size="lg" position="start">Обо мне</HeaderText>
            <ModeSwitcherField class="mb-3"></ModeSwitcherField>
        </div>
        <Breadcrumbs class="mt-2" :breadcrumbs="breadcrumbs"/>
        <div class="about-me">
            <p class="mb-0 about-me-text text-break lh-lg">
                Я  студент 2 курса ИТИС КФУ.  Несмотря на то что меня небогатый практический опыт разработки, я способен быстро осваивать новые навыки и концентрировать свое внимание ради достижения нужного результата.
            </p>
            <p class="about-me-text text-break lh-lg">
                Нацелен на активное сотрудничество в команде и открыт к новым вызовам.
            </p>
        </div>
        <SkillsList :skills="skills">
            <template v-slot:extra-content>
                <li>
                    <img class="object-fit-cover" :width="30" :height="30" src="../assets/postgresql.png" alt="<postgresql icon>">
                    <span class="ms-2 monospace-text skill-text">PostgreSQL</span>
                </li>
                <li>
                    <img class="object-fit-cover" src="../assets/django.png" alt="<django icon>">
                    <span class="ms-2 monospace-text skill-text">Django</span>
                </li>
            </template>
        </SkillsList>
    </main>
</template>

<style scoped>
    .about-me-text {
        text-indent: 2rem;
    }
</style>