<script setup>
import { getAPI } from "@/utils";
import { ref } from "vue";
import Response from "./Response.vue";

const { token, team, wallet } = defineProps(["token", "team", "wallet"]);
const refId = ref();
const response = ref();

const onSubmit = async () => {
  const transaction = await getAPI(token, `/wallets/${wallet.uuid}/transactions?refId=${refId.value}`)

  response.value = JSON.stringify(transaction[0], null, 2);
}

</script>
<style scoped>
pre {
  margin-top: var(--card-padding);
  text-wrap: wrap;
}
</style>
<template>
  <div class="card">
    <h1>Fetch transaction</h1>
    <div class="column">
      <div class="row">
        <div>Transaction refId</div>
        <div><input v-model="refId" /></div>
      </div>
      <div class="row">
        <button v-on:click="onSubmit">Submit</button>
      </div>
      <Response :response="response" />
    </div>
  </div>
</template>
