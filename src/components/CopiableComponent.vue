<script setup lang="ts">
import { computed } from 'vue'

const { valueLabel, value } = defineProps<{
  label: string
  value?: string
  valueLabel?: string
}>()

const uiValueLabel = computed(() => {
  return valueLabel ?? value
})

function onCopy() {
  if (value) navigator.clipboard.writeText(value)
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
