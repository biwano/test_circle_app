<script setup>
import { computed, ref, shallowRef } from "vue";
import GetTransaction from "./GetTransaction.vue";
import GetListings from "./GetListings.vue";
import GetHoldings from "./GetHoldings.vue";
const { token, team, wallet } = defineProps(["token", "team", "wallet"]);
const queries = shallowRef([
  {
    title: 'Get transaction',
    component: GetTransaction
  },
  {
    title: 'List listings',
    component: GetListings
  }
  ,
  {
    title: 'List holdings',
    component: GetHoldings
  }
])
const activeQueryIndex = ref(0)
const activeQuery = computed(() => queries.value[activeQueryIndex.value])
</script>

<style scoped>
.pills {
  display: flex;
  flex-direction: row;
  gap: var(--item-gap);
}

.active {
  background-color: var(--color-background-active)
}
</style>

<template>
  <div class="card">
    <div class="column">
      <div class="pills">
        <button v-for="(query, index) in queries" v-on:click="activeQueryIndex = index"
          :class="{ active: activeQueryIndex == index }">
          {{ query.title }}
        </button>
      </div>
      <component :is="activeQuery.component" :team="team" :wallet="wallet" :token="token" />
    </div>
  </div>
</template>
