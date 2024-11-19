<script setup lang="ts">
import type { UserContext } from "@/types";
import { useApi } from "@/utils/useApi";
import QueryWrapper from "./shared/QueryWrapper.vue";
import { useQuery } from "./shared/useQuery";

const props = defineProps<{
  ctx: UserContext;
}>();

const { getAPI, getQueryArgs } = useApi();

const query = useQuery(() =>
  getAPI(
    `/activities?walletAddress=${props.ctx.wallet?.address}`,
    getQueryArgs(props.ctx),
  ),
);
</script>

<template>
  <QueryWrapper @submit="query.onSubmit" :query="query" />
</template>
