<script setup lang="ts">
const { activable, active } = defineProps<{
  activable?: boolean;
  active?: boolean;
}>();
defineEmits<{ click: string }>();
</script>
<template>
  <button
    :class="{
      activable,
      active,
    }"
    @click="() => $emit('click')"
  >
    <slot />
  </button>
</template>

<style scoped>
button {
  padding: var(--item-padding);
  font-size: 1rem;
  background-color: var(--color-surface-activable-background);
  color: var(--color-surface-activable-text);
  border: var(--surface-activable-border);
  border-radius: var(--border-radius);
  transition: 0.5s;
}

button:hover {
  border-color: var(--color-surface-active-background);
  border: var(--surface-activable-border-hover);
}

button.active {
  background-color: var(--color-surface-active-background);
  border: var(--surface-active-border);
  color: var(--color-surface-active-text);
}
</style>
