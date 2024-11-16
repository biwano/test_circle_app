<script setup lang="ts">
import { computed, ref } from "vue";
import Icon from "./Icon.vue";
import InteractiveText from "./InteractiveText.vue";

defineProps<{ title: string }>();

const hidden = ref(false);
const iconShape = computed(() => (hidden.value ? "eye-alt" : "eye"));
</script>

<template>
  <div class="wrapper">
    <div class="header">
      <h2>{{ title }}</h2>
      <InteractiveText
        ><Icon :shape="iconShape" @click="hidden = !hidden"
      /></InteractiveText>
    </div>
    <div :class="{ hidden }">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  position: relative;
  padding: 1rem;
  border: 1px solid;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.caret {
  right: 0;
  top: 0.25rem;
  position: relative;
  transition: 0.5s;
  color: red;
}
.caret.opened {
  transform: rotate(0deg) !important;
}
.caret.closed {
  transform: rotate(90deg) !important;
}
.hidden {
  max-height: 0;
  overflow: hidden;
}
</style>
