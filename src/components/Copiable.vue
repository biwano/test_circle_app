<script setup>
import { ref, computed } from 'vue';

const {valueLabel, value} = defineProps(["label", "value", "valueLabel"]);

const uiValueLabel = computed(() => {
  return valueLabel ?? value;
})

function onCopy() {
  navigator.clipboard.writeText(value);
}

</script>

<template>
 
    <div class="row"><div>{{label}}</div><div v-on:click="onCopy">{{ uiValueLabel }}</div></div>
</template>
