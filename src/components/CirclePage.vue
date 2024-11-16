<script setup lang="ts">
import { W3SSdk } from '@circle-fin/w3s-pw-web-sdk'
import { createClient } from '@supabase/supabase-js'
import { onMounted, ref } from 'vue'
import constants from '../constants'
import Info from './InfoCard.vue'
import { getAPI, postAPI } from '@/utils'
import Query from './Query/QueryCard.vue'
import { UserContext } from '@/types'

const getTeam = async (token) => {
  const team = await getAPI(token, '/teams/default')
  let hasWallet = false
  if (!team?.uuid) {
    console.error('Cannot fetch team.')
  } else if (team?.wallets.length) {
    hasWallet = true
  }
  return {
    team,
    hasWallet,
  }
}
const getToken = async () => {
  try {
    const supabase = createClient(constants.SUPABASE.URL, constants.SUPABASE.ANON_KEY)
    const response = await supabase.auth.signInWithPassword({
      email: constants.SUPABASE.EMAIL,
      password: constants.SUPABASE.PASSWORD,
    })
    return response.data.session?.access_token
  } catch (e) {
    console.error(e)
  }
}

const userContext = ref<UserContext>({
  team: undefined,
  wallet: undefined,
  token: undefined,
})

onMounted(async () => {
  const token = await getToken()
  if (!token) return
  userContext.value = {
    ...userContext.value,
    token,
  }

  // Fetch team
  const team = await getAPI(token, `/teams/default`)
  userContext.value = {
    ...userContext.value,
    team,
  }
  if (team.wallets) {
    const wallet = await getAPI(token, `/wallets/${team.wallets[0]}`)
    userContext.value = {
      ...userContext.value,
      wallet,
    }
  }
  /*

  // Initialize wallet
  const initializeWalletsResponse = await postAPI(
    token,
    `/wallets?team=${team.uuid}`
  );
  if (!initializeWalletsResponse.challengeId) {
    console.log("Cannot initialize wallet", initializeWalletsResponse);
    return;
  }
  const { userToken, encryptionKey, challengeId } = initializeWalletsResponse;
  const sdk = new W3SSdk({});
  sdk.setAppSettings({ appId: constants.APPID });
  sdk.setAuthentication({ userToken, encryptionKey });
  sdk.execute(challengeId, async (error, result) => {
    if (error) {
      console.error(`Error: ${error?.message ?? "Error!"}`);
      return;
    }
    console.info(`Challenge: ${result?.type}, Status: ${result?.status}`);
    const { team, hasWallet } = await getTeam(token);
    console.info(`Team`, team);
    if (hasWallet) {
      getWallet(token, team);
    }
  });*/
})
</script>

<template>
  <div class="column">
    <Info :userContext="userContext" />
  </div>
</template>
