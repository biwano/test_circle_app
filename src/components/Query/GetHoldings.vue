<script setup lang="ts">
import type { UserContext } from "@/types";
import { getAPI, getQueryArgs } from "@/utils";
import QueryTemplate from "./QueryWrapper.vue";
import { useQuery } from "./useQuery";

const props = defineProps<{
  ctx: UserContext;
}>();

const { response, onSubmit } = useQuery(() =>
  getAPI(`/holdings/${props.ctx.wallet?.address}`, getQueryArgs(props.ctx)),
);
</script>

<template>
  <QueryTemplate :response="response" @submit="onSubmit" />
</template>
