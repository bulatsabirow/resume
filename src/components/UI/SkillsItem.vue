<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const props = defineProps({
  skill: String,
  icon: Array[String],
  color: {
    type: String,
    default: '#1E3050'
  },
  size: {
    type: String,
    default: 'xl'
  }
})
</script>

<template>
  <li class="mb-1">
    <FontAwesomeIcon :size="props.size" class="skill-icon" :icon="props.icon" />
    <span class="skill-text monospace-text ms-2">{{ props.skill }}</span>
  </li>
</template>

<style>
.skill-icon {
  color: v-bind(props['color']);
}

.skill-text {
  font-size: 1rem;
}
</style>
