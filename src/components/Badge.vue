<template>
  <span class="badge">
    <slot>
      {{ Text }}
    </slot>
  </span>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  Text: {
    type: String,
    default: "Badge",
  },
});
</script>
