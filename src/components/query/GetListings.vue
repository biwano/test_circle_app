<script setup lang="ts">
import { useUserContextStore } from "@/stores/userContext";
import { getQueryArgs } from "@/utils/api";
import QueryWrapper from "./shared/QueryWrapper.vue";
import { useQuery } from "./shared/useQuery";

const ctx = useUserContextStore();

const query = useQuery(() =>
  ctx.api.get(
    `/listings?sellerWallet=${ctx.wallet?.address}`,
    getQueryArgs(ctx),
  ),
);
</script>
<template>
  <QueryWrapper @submit="query.onSubmit" :query="query" />
</template>
