<script setup lang="ts">
import type { UserContext } from "@/types";
import { getAPI, getQueryArgs } from "@/utils";
import { ref } from "vue";
import QueryTemplate from "./QueryWrapper.vue";
import { useQuery } from "./useQuery";

const props = defineProps<{
  ctx: UserContext;
}>();

const refId = ref();
const { response, onSubmit } = useQuery(() =>
  getAPI(
    `/wallets/${props.ctx.wallet?.uuid}/transactions?refId=${refId.value}&eventsFilter=[{"eventNames":["ListingCreated"], "contractName": "carbonmark"}]`,
    getQueryArgs(props.ctx),
  ),
);
</script>
<template>
  <QueryTemplate @submit="onSubmit" :response="response">
    <div class="row">
      <div>Transaction refId</div>
      <div><input v-model="refId" /></div>
    </div>
  </QueryTemplate>
</template>
