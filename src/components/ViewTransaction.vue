<script setup>
import Copiable from "./Copiable.vue";

  const {token, team, wallet} = defineProps(["token", "team", "wallet"]);

</script>
<style scoped>
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
  <div class="card">
    <h1>Fetch transaction</h1>
    <form class="column">
      <div class="item">
        <div>Transaction refId</div>
        <div><input /></div>
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  </div>
</template>
