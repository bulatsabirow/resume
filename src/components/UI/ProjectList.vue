<script setup>
import ProjectItem from '@/components/UI/ProjectItem.vue'

const props = defineProps({
  projectsList: {
    type: Array[Object[String]]
  }
})
</script>

<template>
  <div class="overflow-x-auto">
    <table class="table">
      <ProjectItem
        v-for="[index, projectItem] in Array.prototype.entries.call(props.projectsList)"
        :key="index"
        :project-name="projectItem.projectName"
        :description="projectItem.description"
      />
    </table>
  </div>
</template>

<style scoped>
table {
  max-width: 100%;
}
</style>
