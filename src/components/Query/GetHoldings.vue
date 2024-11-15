<script setup>
import { getAPI } from "@/utils";
import { useQuery } from "./useQuery";
import QueryTemplate from "./QueryTemplate.vue";


const { token, wallet } = defineProps(["token", "team", "wallet"]);
const { response, onSubmit } = useQuery(() =>
  getAPI(token, `/holdings/${wallet.address}`)
);

</script>

<template>
  <QueryTemplate :team="team" :wallet="wallet" :token="token" @submit="onSubmit" :response="response" />
</template>
