<script setup>
defineProps({ response: Object });
</script>

<template>
  <div class="row">
    <pre v-if="response">{{ response }}</pre>
    <pre v-else>No data</pre>
  </div>
</template>

<style scoped>
pre {
  margin-top: var(--card-padding);
  text-wrap: wrap;
}
</style>
