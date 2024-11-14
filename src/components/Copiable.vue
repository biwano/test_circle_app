<script setup>
import { ref } from 'vue';

const {valueLabel, value} = defineProps(["label", "value", "valueLabel"]);
const uiValueLabel = ref("")
uiValueLabel.value = valueLabel ?? value;

function onCopy() {
  navigator.clipboard.writeText(value);
}

</script>

<template>
    <div class="row"><div>{{label}}</div><div v-on:click="onCopy">{{ uiValueLabel }}</div></div>
</template>
