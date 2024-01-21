<script setup>
import Breadcrumbs from '@/components/UI/Breadcrumbs.vue'
import { computed } from 'vue'
import { calculateAge } from '@/utils/date'
import HeaderText from '@/components/UI/HeaderText.vue'
import SkillsList from '@/components/UI/SkillsList.vue'
import PageFooter from '@/components/UI/PageFooter.vue'
import postgresImg from '@/assets/images/postgresql.png'
import djangoImg from '@/assets/images/django.png'

const age = computed(() => calculateAge('2003/02/15'))
const breadcrumbs = [{ key: 'age', val: age.value }, { key: 'city' }]
const skills = [
  {
    icon: ['fab', 'python'],
    title: 'Python',
    color: '#00D846'
  },
  {
    icon: ['fab', 'js'],
    title: 'JavaScript',
    color: '#F0D74D'
  },
  {
    icon: ['fab', 'vuejs'],
    title: 'Vue.js',
    color: '#2CB284'
  },
  {
    icon: ['fab', 'docker'],
    title: 'Docker',
    color: '#016FD0',
    size: 'lg'
  },
  {
    icon: ['fab', 'react'],
    title: 'React',
    color: '#61DBFB'
  }
]
</script>

<template>
  <main class="px-3 d-flex flex-column h-100 w-100">
    <div class="about-me-content flex-grow-1">
      <HeaderText size="lg" position="start">{{ $t('aboutMe') }}</HeaderText>
      <Breadcrumbs class="mt-3" :breadcrumbs="breadcrumbs" />
      <div class="about-me">
        <p class="mb-0 about-me-text text-break lh-lg">
          {{ $t('aboutMeParagraph1') }}
        </p>
        <p class="about-me-text text-break lh-lg">
          {{ $t('aboutMeParagraph2') }}
        </p>
      </div>
      <HeaderText size="lg" position="start">{{ $t('skills') }}</HeaderText>
      <SkillsList :skills="skills">
        <template v-slot:extra-content>
          <li>
            <img
              class="object-fit-cover"
              :width="24"
              :height="24"
              :src="postgresImg"
              alt="<postgresql icon>"
            />
            <span class="ms-2 monospace-text skill-text">PostgreSQL</span>
          </li>
          <li>
            <img class="object-fit-cover" :width="24" :height="24" :src="djangoImg" alt="<django icon>" />
            <span class="ms-2 monospace-text skill-text">Django</span>
          </li>
        </template>
      </SkillsList>
    </div>
    <PageFooter class="mt-4"></PageFooter>
  </main>
</template>

<style scoped>
.about-me-text {
  text-indent: 2rem;
}
</style>
