<script setup>
import { getAPI } from "@/utils";
import { ref } from "vue";
import QueryTemplate from "./QueryTemplate.vue";
import { useQuery } from "./useQuery";

const { token, team, wallet } = defineProps(["token", "team", "wallet"]);
const refId = ref();
const { response, onSubmit } = useQuery(() =>
  getAPI(token, `/wallets/${wallet.uuid}/transactions?refId=${refId.value}&eventsFilter=[{"eventNames":["ListingCreated"], "contractName": "carbonmark"}]`)
);
</script>
<template>
  <QueryTemplate :team="team" :wallet="wallet" :token="token" @submit="onSubmit" :response="response">
    <div class="row">
      <div>Transaction refId</div>
      <div><input v-model="refId" /></div>
    </div>
  </QueryTemplate>
</template>
