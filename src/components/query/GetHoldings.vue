<script setup lang="ts">
import type { UserContext } from "@/types";
import { getAPI, getQueryArgs } from "@/utils";
import QueryWrapper from "./shared/QueryWrapper.vue";
import { useQuery } from "./shared/useQuery";

const props = defineProps<{
  ctx: UserContext;
}>();

const query = useQuery(() =>
  getAPI(`/holdings/${props.ctx.wallet?.address}`, getQueryArgs(props.ctx)),
);
</script>

<template>
  <QueryWrapper @submit="query.onSubmit" :query="query" />
</template>
