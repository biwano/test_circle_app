<script setup lang="ts">
defineProps<{ href: string; target?: string }>();
</script>
<template>
  <a :href="href" :target="target"><slot /></a>
</template>

<style scoped>
a {
  color: var(--interactivetext-color);
  transition: 0.5s;
  text-decoration: none;
}
a:hover {
  cursor: pointer;
  color: var(--interactivetext-hover-color);
}
</style>
