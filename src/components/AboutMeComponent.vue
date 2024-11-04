<script setup>
import BreadcrumbsComponent from '@/components/UI/BreadcrumbsComponent.vue'
import { computeAge } from '@/utils/date'
import skillIcons from '@/data/skill_icons'
import skillImages from '@/data/skill_images'
import HeaderText from '@/components/UI/HeaderText.vue'
import SkillsList from '@/components/UI/SkillsList.vue'
import PageFooter from '@/components/UI/PageFooter.vue'
import { BIRTH_DATE } from '@/utils/consts'
import CareerList from '@/components/UI/CareerList.vue'

const age = computeAge(BIRTH_DATE)
const breadcrumbs = [{ key: 'age', val: age }, { key: 'city' }]
</script>

<template>
  <main class="px-3 d-flex flex-column h-100 w-100">
    <div class="about-me-content flex-grow-1">
      <HeaderText header="h2" position="start">{{ $t('aboutMe') }}</HeaderText>
      <BreadcrumbsComponent class="mt-3" :breadcrumbs="breadcrumbs" />
      <div class="about-me">
        <p
          class="mb-0 text-break lh-lg"
          v-for="[index, paragraph] of Array.prototype.entries.call($tm('aboutMeParagraphs'))"
          :key="index"
        >
          {{ paragraph }}
        </p>
        <div class="mb-5"></div>
      </div>
      <HeaderText header="h2" position="start">{{ $t('careerTitle') }}</HeaderText>
      <CareerList class="mt-3 mb-5" :career-list="$tm('career')" />
      <HeaderText header="h2" position="start">{{ $t('skills') }}</HeaderText>
      <SkillsList :skill-icons="skillIcons" :skill-images="skillImages"></SkillsList>
    </div>
    <PageFooter class="mt-4"></PageFooter>
  </main>
</template>

<style>
.about-me > p {
  text-indent: 2rem;
}

.skill-image {
  width: 1.5rem;
  height: 1.5rem;
}

.skill-text {
  font-size: 1rem;
}
</style>
