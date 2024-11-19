<script setup lang="ts">
import ButtonElement from "@/components/shared/ButtonElement.vue";
import { computed, ref, shallowRef } from "vue";
import Card from "../shared/Card.vue";
import CardColumn from "../shared/CardColumn.vue";
import ItemRow from "../shared/ItemRow.vue";
import GetActivities from "./GetActivities.vue";
import GetHoldings from "./GetHoldings.vue";
import GetListings from "./GetListings.vue";
import GetTransaction from "./GetTransaction.vue";

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
  {
    title: "List Activities",
    component: GetActivities,
  },
]);
const activeQueryIndex = ref(0);
const activeQuery = computed(() => queries.value[activeQueryIndex.value]);
</script>

<template>
  <Card title="Queries">
    <CardColumn>
      <ItemRow>
        <ButtonElement
          v-for="(query, index) in queries"
          :key="index"
          :activable="true"
          :active="activeQueryIndex == index"
          @click="activeQueryIndex = index"
        >
          {{ query.title }}
        </ButtonElement>
      </ItemRow>
      <keep-alive><component :is="activeQuery.component" /></keep-alive>
    </CardColumn>
  </Card>
</template>
