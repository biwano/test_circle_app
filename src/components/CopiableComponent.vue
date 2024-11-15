<script setup>
import { computed } from 'vue';

const { valueLabel, value } = defineProps({"label": String, "value": String, "valueLabel": String});

const uiValueLabel = computed(() => {
  return valueLabel ?? value;
})

function onCopy() {
  navigator.clipboard.writeText(value);
}

</script>

<template>
  <div class="row">
    <div>{{ label }}</div>
    <div @click="onCopy">
      {{ uiValueLabel }}
    </div>
  </div>
</template>
