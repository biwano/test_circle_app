<script setup lang="ts">
import { useCreateWallet } from "@/composables/useCreateWallet";
import { useUserContextStore } from "@/stores/userContext";
import { cutString } from "@/utils";
import { computed } from "vue";
import Card from "./shared/Card.vue";
import ButtonElement from "./shared/ButtonElement.vue";
import Copiable from "./shared/CopiableComponent.vue";
import ItemColumn from "./shared/ItemColumn.vue";
import Link from "./shared/Link.vue";
import Spinner from "./shared/Spinner.vue";

const ctx = useUserContextStore();
const { createWallet, loading, error } = useCreateWallet();

const circleURL = computed(() => {
  return ctx.team
    ? `https://console.circle.com/wallets/user/users/${ctx?.team?.uuid}`
    : "";
});
</script>
<template>
  <Card :title="'User information'">
    <ItemColumn>
      <Copiable
        :label="'Token'"
        :value="ctx.token"
        :value-label="cutString(ctx?.token)"
      />
      <Copiable :label="'Team UUID'" :value="ctx.team?.uuid" />
      <Copiable :label="'Team name'" :value="ctx.team?.name" />
      <Copiable :label="'Wallet UUID'" :value="ctx.wallet?.uuid" />
      <Copiable :label="'Wallet address'" :value="ctx.wallet?.address" />
      <Copiable
        :label="'Circle URL'"
        :value="circleURL"
        :value-label="circleURL"
      >
        <Link :href="circleURL" target="_blank">{{ circleURL }}</Link></Copiable
      >
      <ButtonElement :active="loading" @click="createWallet">
        Create wallet
      </ButtonElement>
      <Spinner v-if="loading" />
      <p v-if="error" class="error">{{ error }}</p>
    </ItemColumn>
  </Card>
</template>
<style scoped>
.error {
  color: #c0392b;
  margin: 0;
}
</style>
