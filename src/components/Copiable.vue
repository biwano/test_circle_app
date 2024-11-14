<script setup>
const {value} = defineProps(["label", "value"]);

function copy() {
  navigator.clipboard.writeText(value);
}

</script>
<style>
.item {
  display: flex;
  gap: 1rem;
}
.item>div {
  flex: 1 1 0;
  padding: var(--padding);
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
    <div class="item"><div>{{label}}</div><div v-on:click="copy">{{ value }}</div></div>
</template>
