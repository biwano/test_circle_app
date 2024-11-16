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
button:hover {
  cursor: pointer;
  background-color: var(--color-background-soft);
}

button.activable {
  background-color: var(--color-surface-activable-background);
  color: var(--color-surface-activable-text);
}

button.active {
  background-color: var(--color-surface-active-background);
  color: var(--color-surface-active-text);
}
</style>
