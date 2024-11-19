<script setup lang="ts">
import JsonViewer from "json-viewer-ts";
import { ref, watch } from "vue";

const { data } = defineProps<{ data?: unknown }>();

const target = ref(null);

watch(
  () => data,
  () => {
    if (!target.value) return;
    const element = target.value as HTMLElement;
    for (let i = 0; i < element.children.length; i++) {
      element.children.item(i)?.remove();
    }

    if (data === undefined) return;

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
  <div>
    <div ref="target"></div>
  </div>
</template>

<style scoped></style>
