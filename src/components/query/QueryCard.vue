<script setup lang="ts">
import ButtonElement from "@/components/shared/ButtonElement.vue";
import type { UserContext } from "@/types";
import { computed, ref, shallowRef } from "vue";
import GetHoldings from "./GetHoldings.vue";
import GetListings from "./GetListings.vue";
import GetTransaction from "./GetTransaction.vue";

const props = defineProps<{
  userContext: UserContext;
}>();

const queries = shallowRef([
  {
    title: "Get transaction",
    component: GetTransaction,
  },
  {
    title: "List listings",
    component: GetListings,
  },
  {
    title: "List holdings",
    component: GetHoldings,
  },
]);
const activeQueryIndex = ref(0);
const activeQuery = computed(() => queries.value[activeQueryIndex.value]);
</script>

<template>
  <div class="card">
    <div class="card-column">
      <div class="pills">
        <ButtonElement
          v-for="(query, index) in queries"
          :key="index"
          :activable="true"
          :active="activeQueryIndex == index"
          @click="activeQueryIndex = index"
        >
          {{ query.title }}
        </ButtonElement>
      </div>
      <keep-alive
        ><component :is="activeQuery.component" :ctx="props.userContext"
      /></keep-alive>
    </div>
  </div>
</template>

<style scoped>
.pills {
  display: flex;
  flex-direction: row;
  gap: var(--item-gap);
}
</style>
