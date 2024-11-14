<script setup>
const {value} = defineProps(["label", "value"]);

function copy() {
  navigator.clipboard.writeText(value);
}

</script>
<style>
.wrapper {
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  word-break: break-all;
  overflow: none;
}
.item {
  display: flex;
  gap: 1rem;
}
.item>div {
  flex: 1 1 0;
}
.item>div:first-child {
  font-weight: bolder;
  font-size: 15px;
}
.item>div:nth-child(2) {
  flex: 2 1 0;
}
</style>
<template>
    <div class="item"><div>{{label}}</div><div v-on:click="copy">{{ value }}</div></div>
</template>
