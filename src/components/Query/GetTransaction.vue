<script setup lang="ts">
import { getAPI } from "@/utils";
import { ref } from "vue";
import QueryTemplate from "./QueryTemplate.vue";
import { useQuery } from "./useQuery";
import type { Wallet, Team } from "@/types";

const { token, wallet } = defineProps({
  token: String,
  team: Team,
  wallet: Wallet,
});
const refId = ref();
const { response, onSubmit } = useQuery(() =>
  getAPI(token, `/wallets/${wallet.uuid}/transactions?refId=${refId.value}&eventsFilter=[{"eventNames":["ListingCreated"], "contractName": "carbonmark"}]`)
);
</script>
<template>
  <QueryTemplate
    :team="team"
    :wallet="wallet"
    :token="token"
    :response="response"
    @submit="onSubmit"
  >
    <div class="row">
      <div>Transaction refId</div>
      <div><input v-model="refId"></div>
    </div>
  </QueryTemplate>
</template>
