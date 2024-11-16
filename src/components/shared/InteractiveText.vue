<script setup lang="ts">
defineEmits<{ click: string }>();
</script>
<template>
  <span @click="() => $emit('click')"><slot /> </span>
</template>

<style scoped>
span {
  color: var(--interactivetext-color);
  transition: 0.5s;
}

span:hover {
  cursor: pointer;
  color: var(--interactivetext-hover-color);
}
</style>
