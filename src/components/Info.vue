<script setup>
import { cutString } from "@/utils";
import Copiable from "./Copiable.vue";

const { token, team, wallet } = defineProps(["token", "team", "wallet"]);

</script>
<style scoped>
</style>
<template>
  <div class="card">
    <h1>User information</h1>
    <div class="column">
      <Copiable :label="'Token'" :value="token" :valueLabel="cutString(token)"></Copiable>
      <Copiable :label="'Team UUID'" :value="team?.uuid"></Copiable>
      <Copiable :label="'Team name'" :value="team?.name"></Copiable>
      <Copiable :label="'Wallet UUID'" :value="wallet?.uuid"></Copiable>
      <Copiable :label="'Wallet address'" :value="wallet?.address"></Copiable>
    </div>
  </div>
</template>
