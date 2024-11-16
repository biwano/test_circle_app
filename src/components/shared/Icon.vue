<script setup lang="ts">
const { shape } = defineProps<{ shape: string }>();
defineEmits<{ click: void }>();
</script>
<template>
  <span
    @click="$emit('click')"
    :class="{
      [`gg-${shape}`]: true,
    }"
  ></span>
</template>

<style scoped></style>
