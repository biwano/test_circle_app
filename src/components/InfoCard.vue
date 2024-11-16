<script setup lang="ts">
import { cutString, useUserContext } from '@/utils'
import Copiable from './CopiableComponent.vue'
import { computed, toRef, toRefs } from 'vue'
import type { UserContext } from '@/types/index'

const props = defineProps<{
  userContext: UserContext
}>()
const { team, token, wallet } = {
  token: computed(() => props.userContext.token),
  wallet: computed(() => props.userContext.wallet),
  team: computed(() => props.userContext.team),
}

//const a = toRef(props, 'userContext')

const circleURL = computed(() => {
  return `https://console.circle.com/wallets/user/users/test-${team.value?.uuid}`
})
</script>
<template>
  <div class="card">
    <h1>User information</h1>
    {{ a }}
    <div class="column">
      <Copiable :label="'Token'" :value="token" :value-label="cutString(token)" />
      <Copiable :label="'Team UUID'" :value="team?.uuid" />
      <Copiable :label="'Team name'" :value="team?.name" />
      <Copiable :label="'Wallet UUID'" :value="wallet?.uuid" />
      <Copiable :label="'Wallet address'" :value="wallet?.address" />
      <Copiable :label="'Circle URL'" :value="circleURL" :value-label="circleURL" />
    </div>
  </div>
</template>
<style scoped></style>
