<script setup lang="ts">
import type { UserContext } from "@/types/index";
import { cutString } from "@/utils";
import { computed } from "vue";
import Copiable from "./shared/CopiableComponent.vue";

const props = defineProps<{
  ctx: UserContext;
}>();

const circleURL = computed(() => {
  return `https://console.circle.com/wallets/user/users/test-${props.ctx.team?.uuid}`;
});
</script>
<template>
  <div class="card">
    <h1>User information</h1>
    <div class="item-column">
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
      />
    </div>
  </div>
</template>
<style scoped></style>
