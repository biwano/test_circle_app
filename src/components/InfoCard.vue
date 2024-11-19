<script setup lang="ts">
import { useUserContextStore } from "@/stores/userContext";
import { cutString } from "@/utils";
import { storeToRefs } from "pinia";
import { computed } from "vue";
import Card from "./shared/Card.vue";
import Copiable from "./shared/CopiableComponent.vue";
import ItemColumn from "./shared/ItemColumn.vue";
import Link from "./shared/Link.vue";

const userContextStore = useUserContextStore();
const { ctx } = storeToRefs(userContextStore);

const circleURL = computed(() => {
  return `https://console.circle.com/wallets/user/users/test-${ctx?.team?.uuid}`;
});
</script>
<template>
  <Card :title="'User information'">
    <ItemColumn>
      <Copiable
        :label="'Token'"
        :value="ctx?.token"
        :value-label="cutString(ctx?.token)"
      />
      <Copiable :label="'Team UUID'" :value="ctx?.team?.uuid" />
      <Copiable :label="'Team name'" :value="ctx?.team?.name" />
      <Copiable :label="'Wallet UUID'" :value="ctx?.wallet?.uuid" />
      <Copiable :label="'Wallet address'" :value="ctx?.wallet?.address" />
      <Copiable
        :label="'Circle URL'"
        :value="circleURL"
        :value-label="circleURL"
      >
        <Link :href="circleURL" target="_blank">{{ circleURL }}</Link></Copiable
      >
    </ItemColumn>
  </Card>
</template>
<style scoped></style>
