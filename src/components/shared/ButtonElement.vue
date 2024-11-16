<script setup lang="ts">
const { active } = defineProps<{
  active?: boolean;
}>();
defineEmits<{ click: string }>();
</script>
<template>
  <button
    :class="{
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
  border-radius: var(--border-radius);
  transition: 0.5s;
  border: var(--surface-border);
  background-color: var(--interactivesurface-background-color);
  box-shadow: var(--interactivesurface-shadow);
  color: var(--interactivesurface-text-color);
}

button:hover {
  background-color: var(--interactivesurface-hover-background-color);
  box-shadow: var(--interactivesurface-hover-shadow);
  color: var(--activesurface-hover-text-color);
}

button.active {
  background-color: var(--activesurface-background-color);
  color: var(--activesurface-text-color);
  box-shadow: var(--activesurface-hover-shadow);
}
</style>
