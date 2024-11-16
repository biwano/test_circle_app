<script setup lang="ts">
import { computed } from "vue";
import CopyIcon from "./CopyIcon.vue";
import InteractiveText from "./InteractiveText.vue";
import LabelValue from "./LabelValue.vue";
import Spinner from "./Spinner.vue";

const { valueLabel, value } = defineProps<{
  label: string;
  value?: string;
  valueLabel?: string;
}>();

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
    <div v-if="uiValueLabel" @click="onCopy" class="value">
      {{ uiValueLabel }}
      <InteractiveText><CopyIcon class="active-text" /></InteractiveText>
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
