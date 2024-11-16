<script setup lang="ts">
import { computed, useSlots } from "vue";
import Icon from "./Icon.vue";
import InteractiveText from "./InteractiveText.vue";
import LabelValue from "./LabelValue.vue";
import Spinner from "./Spinner.vue";

const { valueLabel, value } = defineProps<{
  label: string;
  value?: string;
  valueLabel?: string;
}>();
const slots = useSlots();
const hasSlot = (name: string) => {
  return !!slots[name];
};
console.log(slots);

const uiValueLabel = computed(() => {
  return valueLabel ?? value;
});

function onCopy() {
  if (value) navigator.clipboard.writeText(value);
}
</script>

<template>
  <LabelValue>
    <div>{{ label }}</div>
    <div v-if="uiValueLabel" class="value">
      <slot />
      <span v-if="!hasSlot('default')">{{ uiValueLabel }}</span>
      <InteractiveText
        ><Icon shape="copy" class="active-text" @click="onCopy"
      /></InteractiveText>
    </div>
    <div v-else><Spinner /></div>
  </LabelValue>
</template>

<style scoped>
.value {
  display: flex;
  gap: 1rem;
}
</style>
