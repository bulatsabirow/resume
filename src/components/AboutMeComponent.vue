<script setup>
import Breadcrumbs from "@/components/UI/Breadcrumbs.vue";
import {computed} from "vue";
import {calculateAge} from "../../utils/date.js";
import HeaderText from "@/components/UI/HeaderText.vue";
import SkillsList from "@/components/UI/SkillsList.vue";
import ModeSwitcherField from "@/components/UI/ModeSwitcherField.vue";
import LanguageSwitcher from "@/components/UI/LanguageSwitcher.vue";

const age = computed(() => calculateAge("2003/02/15"));
const breadcrumbs = [{key: "age", val: age.value}, {key: "city"}];
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
            <HeaderText size="lg" position="start">{{ $t("aboutMe") }}</HeaderText>
            <ModeSwitcherField class="mb-3"></ModeSwitcherField>
        </div>
        <Breadcrumbs class="mt-2" :breadcrumbs="breadcrumbs"/>
        <div class="about-me">
            <p class="mb-0 about-me-text text-break lh-lg">
                {{ $t("aboutMeParagraph1") }}
            </p>
            <p class="about-me-text text-break lh-lg">
                {{ $t("aboutMeParagraph2") }}
            </p>
        </div>
        <HeaderText size="lg" position="start">{{ $t("skills") }}</HeaderText>
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
        <LanguageSwitcher></LanguageSwitcher>
    </main>
</template>

<style scoped>
    .about-me-text {
        text-indent: 2rem;
    }
</style>