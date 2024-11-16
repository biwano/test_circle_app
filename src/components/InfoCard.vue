<script setup lang="ts">
import type { UserContext } from "@/types/index";
import { cutString } from "@/utils";
import { computed } from "vue";
import Card from "./shared/Card.vue";
import Copiable from "./shared/CopiableComponent.vue";
import ItemColumn from "./shared/ItemColumn.vue";
import Link from "./shared/Link.vue";

const props = defineProps<{
  ctx: UserContext;
}>();

const circleURL = computed(() => {
  return `https://console.circle.com/wallets/user/users/test-${props.ctx.team?.uuid}`;
});
</script>
<template>
  <Card :title="'User information'">
    <ItemColumn>
      <Copiable
        :label="'Token'"
        :value="props.ctx.token"
        :value-label="cutString(props.ctx.token)"
      />
      <Copiable :label="'Team UUID'" :value="props.ctx.team?.uuid" />
      <Copiable :label="'Team name'" :value="props.ctx.team?.name" />
      <Copiable :label="'Wallet UUID'" :value="props.ctx.wallet?.uuid" />
      <Copiable :label="'Wallet address'" :value="props.ctx.wallet?.address" />
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
