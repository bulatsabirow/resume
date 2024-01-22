<script setup>
import SkillItem from '@/components/UI/SkillsItem.vue'

const props = defineProps({
  skillIcons: Array[Object[String]],
  skillImages: Array[Object[String]]
})
</script>

<template>
  <ul class="list-unstyled mt-2">
    <SkillItem
      v-for="skill in props.skillIcons"
      :key="skill.title"
      :icon="skill.icon"
      :skill="skill.title"
      :size="skill.size"
      :color="skill.color"
    />
    <SkillItem v-for="skill in props.skillImages"
                    :key="skill.title"
                    :skill="skill.title"
                    :img="{alt: skill.alt, src: skill.src}"
    />
    <slot name="extra-content"></slot>
  </ul>
</template>

<style scoped></style>
