<script setup>
import { getAPI } from "@/utils";
import { ref } from "vue";
import Response from "./Response.vue";

const { token, team, wallet } = defineProps(["token", "team", "wallet"]);
const refId = ref();
const response = ref();

const onSubmit = async () => {
  const transaction = await getAPI(token, `/listings?sellerWallet=${wallet.address}`)
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
  <div>
    <h1>Fetch listings</h1>
    <div class="column">
      <div class="row">
        <button v-on:click="onSubmit">Submit</button>
      </div>
      <Response :response="response" />
    </div>
  </div>
</template>
