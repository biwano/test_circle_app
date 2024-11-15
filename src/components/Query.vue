<script setup>
import { computed, ref, shallowRef } from "vue";
import GetTransaction from "./GetTransaction.vue";
import GetListings from "./GetListings.vue";
const { token, team, wallet } = defineProps(["token", "team", "wallet"]);
const queries = ref([
  {
    title: 'Get transaction',
    component: GetTransaction
  },
  {
    title: 'Get listings',
    component: GetListings
  }
])
const activeQueryIndex = ref(0)
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: var(--card-gap);
}
</style>

<template>
  <div class="card">
    <div>
      <button v-for="(query, index) in queries" v-on:click="activeQueryIndex = index">{{ query.title }}</button>
    </div>
    <component :is="queries[activeQueryIndex].component" :team="team" :wallet="wallet" :token="token" />
  </div>
</template>
