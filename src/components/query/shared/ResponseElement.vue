<script setup lang="ts">
defineProps<{ response?: string }>();
</script>

<template>
  <div class="row">
    <pre v-if="response">{{ response }}</pre>
  </div>
</template>

<style scoped>
pre {
  margin-top: var(--card-padding);
  text-wrap: wrap;
}
</style>
