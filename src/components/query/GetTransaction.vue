<script setup lang="ts">
import type { UserContext } from "@/types";
import { useApi } from "@/utils/useApi";
import { ref } from "vue";
import LabelValue from "../shared/LabelValue.vue";
import QueryWrapper from "./shared/QueryWrapper.vue";
import { useQuery } from "./shared/useQuery";

const props = defineProps<{
  ctx: UserContext;
}>();

const { getAPI, getQueryArgs } = useApi();

const refId = ref();
const query = useQuery(() =>
  getAPI(
    `/wallets/${props.ctx.wallet?.uuid}/transactions?refId=${refId.value}&eventsFilter=[{"eventNames":["ListingCreated"], "contractName": "carbonmark"}]`,
    getQueryArgs(props.ctx),
  ),
);
</script>
<template>
  <QueryWrapper @submit="query.onSubmit" :query="query">
    <LabelValue>
      <div>Transaction refId</div>
      <div><input v-model="refId" /></div>
    </LabelValue>
  </QueryWrapper>
</template>
