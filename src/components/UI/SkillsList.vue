<script setup>
import HeaderText from "@/components/UI/HeaderText.vue";
import SkillsItem from "@/components/UI/SkillsItem.vue";

const props = defineProps({
    skills: Array[Object[String]],
})
</script>

<template>
    <HeaderText size="lg" position="start" class="text-white">Навыки</HeaderText>
    <ul class="list-unstyled text-white">
             <SkillsItem v-for="skill in skills" :icon="skill.icon"
                        :skill="skill.title" :color="skill.color" />
    </ul>
</template>

<style scoped>

</style>