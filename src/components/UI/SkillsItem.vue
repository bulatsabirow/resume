<script setup>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {ref} from "vue";

const props = defineProps({
    skill: String,
    icon: Array[String],
    color: {
        type: String,
        default: "#1E3050",
    },
})
</script>

<template>
    <li><FontAwesomeIcon class="skill-icon" :icon="props.icon"/>
        <span class="skill-text monospace-text ms-2">{{ props.skill }}</span>
    </li>
</template>

<style scoped>
    .skill-icon {
        color: v-bind(props['color']);
    }
    .skill-text {
        font-size: 1.25rem;
    }
</style>