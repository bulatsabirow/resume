<script setup>
import HeaderText from "@/components/UI/HeaderText.vue";
import SkillsItem from "@/components/UI/SkillsItem.vue";

const props = defineProps({
    skills: Array[Object[String]],
})
</script>

<template>
    <HeaderText size="lg" position="start">Навыки</HeaderText>
    <ul class="list-unstyled">
             <SkillsItem v-for="skill in skills" :icon="skill.icon"
                        :skill="skill.title" :color="skill.color" />
            <slot name="extra-content"></slot>
    </ul>
</template>

<style scoped>

</style>