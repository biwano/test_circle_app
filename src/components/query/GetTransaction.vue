<script setup lang="ts">
import { useUserContextStore } from "@/stores/userContext";
import { getQueryArgs } from "@/utils/api";
import { ref } from "vue";
import LabelValue from "../shared/LabelValue.vue";
import QueryWrapper from "./shared/QueryWrapper.vue";
import { useQuery } from "./shared/useQuery";

const ctx = useUserContextStore();

const refId = ref();
const query = useQuery(() =>
  ctx.api.get(
    `/wallets/${ctx.wallet?.uuid}/transactions?refId=${refId.value}&eventsFilter=[{"eventNames":["ListingCreated"], "contractName": "carbonmark"}]`,
    getQueryArgs(ctx),
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
