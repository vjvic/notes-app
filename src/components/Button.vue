<template>
  <button
    :class="buttonClasses"
    :type="type"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot name="icon" />
    <slot>{{ label }}</slot>
  </button>
</template>

<script setup>
import { defineProps, defineEmits, computed } from "vue";

const props = defineProps({
  label: {
    type: String,
    default: "Button",
  },
  color: {
    type: String,
    default: "primary", // Default to primary
  },
  type: {
    type: String,
    default: "button", // button, submit, reset
  },
  border: {
    type: String,
    default: "rounded", // rounded, pill, circle
  },
  disabled: {
    type: Boolean,
    default: false, // Disabled state
  },
});

const emit = defineEmits(["click"]);

const buttonClasses = computed(() => {
  return ["uk-button", `uk-button-${props.color}`, `uk-border-${props.border}`];
});

const handleClick = () => {
  if (!props.disabled) {
    emit("click");
  }
};
</script>

<style scoped>
::v-deep [slot="icon"] {
  margin-right: 0.5rem;
  display: inline-flex;
  align-items: center;
}
</style>
