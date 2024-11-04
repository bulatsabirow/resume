<script setup>
import SkillItem from '@/components/UI/SkillsItem.vue'
import pandasImg from '@/assets/images/pandas.png'
import pysparkImg from '@/assets/images/pyspark.png'
import hadoopImg from '@/assets/images/hadoop.png'
import SQLImg from '@/assets/images/sql.png'
import ScalaImg from '@/assets/images/scala.png'

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
    <li class="mb-1">
      <ul class="mt-0">
        <li class="mb-1 list-unstyled">
          <img :src="pandasImg" class="object-fit-cover skill-image" />
          <span class="skill-text monospace-text ms-2">Pandas</span>
        </li>
        <li class="mb-1 list-unstyled">
          <img :src="pysparkImg" class="object-fit-cover skill-image" />
          <span class="skill-text monospace-text ms-2">PySpark</span>
        </li>
      </ul>
    </li>
    <li class="mb-1">
      <img :src="ScalaImg" class="object-fit-cover skill-image" />
      <span class="skill-text monospace-text ms-2">Scala</span>
    </li>
    <li class="mb-1">
      <img :src="hadoopImg" class="object-fit-cover skill-image" />
      <span class="skill-text monospace-text ms-2">Hadoop</span>
    </li>
    <li class="mb-1">
      <img :src="SQLImg" class="object-fit-cover skill-image" />
      <span class="skill-text monospace-text ms-2">SQL</span>
    </li>
    <!--    <SkillItem-->
    <!--      v-for="skill in props.skillImages"-->
    <!--      :key="skill.title"-->
    <!--      :skill="skill.title"-->
    <!--      :img="{ alt: skill.alt, src: skill.src }"-->
    <!--    />-->
    <slot name="extra-content"></slot>
  </ul>
</template>

<style scoped></style>
