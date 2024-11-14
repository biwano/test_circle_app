<script setup>
import Copiable from "./Copiable.vue";

  const {token, team, wallet} = defineProps(["token", "team", "wallet"]);
</script>
<style scoped>

</style>
<template>
  <div class="card">
    <h1>Fetch transaction</h1>
    <form class="column">
      <div class="row">
        <div>Transaction refId</div>
        <div><input /></div>
      </div>
      <div class="row">
        <button>Submit</button>
      </div>
    </form>
  </div>
</template>
