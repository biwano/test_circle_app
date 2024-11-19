<script setup lang="ts">
import { useUserContextStore } from "@/stores/userContext";
import { useApi } from "@/utils/useApi";
import QueryWrapper from "./shared/QueryWrapper.vue";
import { useQuery } from "./shared/useQuery";

const { getAPI, getQueryArgs } = useApi();
const ctx = useUserContextStore();

const query = useQuery(() =>
  getAPI(`/activities?walletAddress=${ctx.wallet?.address}`, getQueryArgs(ctx)),
);
</script>

<template>
  <QueryWrapper @submit="query.onSubmit" :query="query" />
</template>
