<script setup lang="ts">
import JsonViewer from "json-viewer-ts";
import { ref, watch } from "vue";

const { data } = defineProps<{ data?: unknown }>();

const target = ref(null);

watch(
  () => data,
  () => {
    if (!target.value) return;
    new JsonViewer({
      container: target.value,
      data,
      theme: "light",
      expand: true,
    });
  },
);
</script>

<template>
  <div ref="target"></div>
</template>

<style scoped></style>
