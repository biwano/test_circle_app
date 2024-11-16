<script setup lang="ts">
defineProps<{ title: string }>();
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <slot />
  </div>
</template>

<style scoped>
div {
  padding: 1rem;
  border: 1px solid;
}
</style>
