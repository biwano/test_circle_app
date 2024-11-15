<script setup lang="ts">
import { cutString } from "@/utils";
import Copiable from "./CopiableComponent.vue";
import { computed } from 'vue';
import type {Team, Wallet} from '@/types'

const { token, wallet, team } = defineProps({"token": String, "team": Team, "wallet": Wallet});

const circleURL = computed(() => { return `https://console.circle.com/wallets/user/users/test-${team?.uuid}` });

</script>
<template>
  <div class="card">
    <h1>User information</h1>
    <div class="column">
      <Copiable
        :label="'Token'"
        :value="token"
        :value-label="cutString(token)"
      />
      <Copiable
        :label="'Team UUID'"
        :value="team?.uuid"
      />
      <Copiable
        :label="'Team name'"
        :value="team?.name"
      />
      <Copiable
        :label="'Wallet UUID'"
        :value="wallet?.uuid"
      />
      <Copiable
        :label="'Wallet address'"
        :value="wallet?.address"
      />
      <Copiable
        :label="'Circle URL'"
        :value="circleURL"
        :value-label="circleURL"
      />
    </div>
  </div>
</template>
<style scoped></style>
