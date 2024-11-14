<script setup>
import { ref } from 'vue';

const {valueLabel, value} = defineProps(["label", "value", "valueLabel"]);
const uiValueLabel = ref("")
uiValueLabel.value = valueLabel ?? value;

function onCopy() {
  navigator.clipboard.writeText(value);
}

</script>
<style scoped>
.item {
  display: flex;
  gap: 1rem;
}
.item>div {
  flex: 1 1 0;
  padding: var(--item-padding);
  display: flex;
  align-items: center;
}
.item>div:first-child {
  font-weight: bolder;

  background-color: var(--color-background-soft);
}
.item>div:nth-child(2) {
  flex: 2 1 0;
}
</style>
<template>
    <div class="item"><div>{{label}}</div><div v-on:click="onCopy">{{ uiValueLabel }}</div></div>
</template>
