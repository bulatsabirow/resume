<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const props = defineProps({
  skill: String,
  icon: Array[String],
  img: Object,
  color: {
    type: String,
    default: '#1E3050'
  },
  size: {
    type: String,
    default: 'xl'
  },
})
</script>

<template>
  <li class="mb-1">
    <FontAwesomeIcon v-if="icon" :size="props.size" class="skill-icon" :icon="props.icon" />
    <img v-else :src="img.src" :alt="img.alt" class="object-fit-cover skill-image"/>
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
