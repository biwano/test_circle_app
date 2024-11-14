<script setup>
import Copiable from "./Copiable.vue";

  const {token, team, wallet} = defineProps(["token", "team", "wallet"]);

</script>
<style>
.wrapper {
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  word-break: break-all;
  gap: var(--gap);
  overflow: none;
}

</style>
<template>
  <div class="wrapper">
    <Copiable :label="'Token'" :value="token"></Copiable>
    <Copiable :label="'Team UUID'" :value="team?.uuid"></Copiable>
    <Copiable :label="'Team name'" :value="team?.name"></Copiable>
    <Copiable :label="'Wallet UUID'" :value=" wallet?.uuid"></Copiable>
    <Copiable :label="'Wallet address'" :value=" wallet?.address"></Copiable>
  </div>
  
</template>
