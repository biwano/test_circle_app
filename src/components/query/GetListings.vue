<script setup lang="ts">
import { useUserContextStore } from "@/stores/userContext";
import { useApi } from "@/utils/useApi";
import QueryWrapper from "./shared/QueryWrapper.vue";
import { useQuery } from "./shared/useQuery";

const ctx = useUserContextStore();
const { getAPI, getQueryArgs } = useApi();

const query = useQuery(() =>
  getAPI(`/listings?sellerWallet=${ctx.wallet?.address}`, getQueryArgs(ctx)),
);
</script>
<template>
  <QueryWrapper @submit="query.onSubmit" :query="query" />
</template>
