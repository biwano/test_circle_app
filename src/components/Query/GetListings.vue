<script setup>
import { getAPI } from "@/utils";
import QueryTemplate from "./QueryTemplate.vue";
import { useQuery } from "./useQuery";

const { token, team, wallet } = defineProps(["token", "team", "wallet"]);
const { response, onSubmit } = useQuery(() =>
  getAPI(token, `/listings?sellerWallet=${wallet.address}`)
);

</script>
<template>
  <QueryTemplate :team="team" :wallet="wallet" :token="token" @submit="onSubmit" :response="response">
    <div></div>
  </QueryTemplate>
</template>
