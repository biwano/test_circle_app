<script setup>

defineProps(["response"]);
</script>
<style scoped>
pre {
  margin-top: var(--card-padding);
  text-wrap: wrap;
}
</style>
<template>
  <div class="row">
    <pre v-if="response">{{ response }}</pre>
    <pre v-else>No data</pre>
  </div>
</template>
