<script setup lang="ts">
import { useUserContextStore } from "@/stores/userContext";
import { useApi } from "@/utils/useApi";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import LabelValue from "../shared/LabelValue.vue";
import QueryWrapper from "./shared/QueryWrapper.vue";
import { useQuery } from "./shared/useQuery";

const userContextStore = useUserContextStore();
const { ctx } = storeToRefs(userContextStore);
const { getAPI, getQueryArgs } = useApi();

const refId = ref();
const query = useQuery(() =>
  getAPI(
    `/wallets/${ctx.value.wallet?.uuid}/transactions?refId=${refId.value}&eventsFilter=[{"eventNames":["ListingCreated"], "contractName": "carbonmark"}]`,
    getQueryArgs(ctx.value),
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
