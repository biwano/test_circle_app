<script setup lang="ts">
import { useUserContextStore } from "@/stores/userContext";
import { useApi } from "@/utils/useApi";
import { storeToRefs } from "pinia";
import QueryWrapper from "./shared/QueryWrapper.vue";
import { useQuery } from "./shared/useQuery";

const userContextStore = useUserContextStore();
const { ctx } = storeToRefs(userContextStore);
const { getAPI, getQueryArgs } = useApi();

const query = useQuery(() =>
  getAPI(
    `/listings?sellerWallet=${ctx.value.wallet?.address}`,
    getQueryArgs(ctx.value),
  ),
);
</script>
<template>
  <QueryWrapper @submit="query.onSubmit" :query="query" />
</template>
