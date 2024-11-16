<script setup lang="ts">
import { computed, ref } from "vue";
import Icon from "./Icon.vue";
import InteractiveText from "./InteractiveText.vue";
import ItemColumn from "./ItemColumn.vue";

defineProps<{ title: string }>();

const hidden = ref(false);
const iconShape = computed(() => (hidden.value ? "eye-alt" : "eye"));
</script>

<template>
  <div class="wrapper">
    <ItemColumn>
      <div class="header">
        <h2>{{ title }}</h2>
        <InteractiveText
          ><Icon :shape="iconShape" @click="hidden = !hidden"
        /></InteractiveText>
      </div>
      <div :class="{ hidden }">
        <slot />
      </div>
    </ItemColumn>
  </div>
</template>

<style scoped>
.wrapper {
  padding: 1rem;
  border: 1px solid;
  border-radius: var(--border-radius);
  box-shadow: var(--surface-shadow);
  background-color: var(--neutralsurface-background-color);
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.hidden {
  max-height: 0;
  overflow: hidden;
}
</style>
