<script setup>
import { cutString } from "@/utils";
import Copiable from "./Copiable.vue";
import { computed } from 'vue';

const { team } = defineProps(["token", "team", "wallet"]);

const circleURL = computed(() => { return `https://console.circle.com/wallets/user/users/test-${team?.uuid}` });

</script>
<style scoped></style>
<template>
  <div class="card">
    <h1>User information</h1>
    <div class="column">
      <Copiable :label="'Token'" :value="token" :valueLabel="cutString(token)" />
      <Copiable :label="'Team UUID'" :value="team?.uuid" />
      <Copiable :label="'Team name'" :value="team?.name" />
      <Copiable :label="'Wallet UUID'" :value="wallet?.uuid" />
      <Copiable :label="'Wallet address'" :value="wallet?.address" />
      <Copiable :label="'Circle URL'" :value="circleURL" :valueLabel="circleURL" />
    </div>
  </div>
</template>
