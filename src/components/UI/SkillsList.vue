<script setup>
import SkillsItem from '@/components/UI/SkillsItem.vue'

const props = defineProps({
  skills: Array[Object[String]]
})
</script>

<template>
  <ul class="list-unstyled mt-2">
    <SkillsItem
      v-for="skill in props.skills"
      :key="skill.title"
      :icon="skill.icon"
      :skill="skill.title"
      :color="skill.color"
    />
    <slot name="extra-content"></slot>
  </ul>
</template>

<style scoped></style>
