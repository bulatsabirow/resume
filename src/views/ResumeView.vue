<script setup>
import PersonComponent from '@/components/PersonComponent.vue'
import AboutMeComponent from '@/components/AboutMeComponent.vue'
</script>

<template>
  <main class="container-fluid overflow-auto main-container w-100 vh-100 px-0">
    <div class="row row-cols-lg-1 w-100 min-vh-100 mx-0">
      <div class="person-container col-lg-3">
        <PersonComponent class="w-100" />
      </div>
      <div class="about-me-container flex-grow-1 col-lg-9">
        <AboutMeComponent />
      </div>
    </div>
  </main>
</template>

<style scoped>
.person-container {
  background-color: var(--bs-purple);
  max-width: 400px;
  min-width: 200px;
}

.about-me-container {
  min-width: 300px;
}

@media (max-width: 992px) {
  .person-container {
    max-width: 100% !important;
    min-width: 250px;
  }
}
</style>
