<script setup>
import { computed } from 'vue'

const props = defineProps({
  header: {
    type: String,
    default: 'h3'
  },
  position: {
    type: String,
    default: 'center'
  }
});
const headerStyle = computed(() => `${props.position} monospace-text mt-4`);
</script>

<template>
  <div class="d-inline">
    <component :is="props.header" :class="headerStyle">
      <slot></slot>
    </component>
  </div>
</template>

<style scoped></style>
