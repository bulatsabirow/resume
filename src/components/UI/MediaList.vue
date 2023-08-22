<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const iconsList = [
  {
    url: 'https://github.com/bulatsabirow',
    icon: ['fab', 'github']
  },
  {
    url: 'https://gitlab.com/bulatsabirow',
    icon: ['fab', 'gitlab']
  },
  {
    url: 'https://t.me/bulatsabirow',
    icon: ['fab', 'telegram']
  },
  {
    url: 'mailto:bulatsabirow@gmail.com',
    icon: ['fas', 'envelope']
  }
]
</script>

<template>
  <ul class="list-unstyled mt-4">
    <li class="d-inline-block ms-3" v-for="{ url, icon } in iconsList">
      <a :href="url" target="_blank" class="media-link">
        <FontAwesomeIcon size="2x" color="indigo" :icon="icon" />
      </a>
    </li>
  </ul>
</template>

<style scoped>
ul > li:last-child {
  margin-right: 1rem;
}
.media-link:hover {
  opacity: 50%;
}
</style>
