<script setup>
import { W3SSdk } from '@circle-fin/w3s-pw-web-sdk'
import { onMounted } from 'vue'
import constants from "../constants"

const fetchAPI = async(method, path) => {
  return (await fetch(`${constants.CARBONMARK_API_URL}${path}`, {
      method,
      headers: {
  Authorization: `Bearer ${constants.SUPABASETOKEN}`
}
    })).json();
}

const getTeam = async() => {
  const team = await fetchAPI("GET", "/teams/default");
  if (!team?.id) {
    console.error("Cannot fetch team.")
    return [team, true];
  }
  if (team?.wallet) {
    console.info(`Wallet found: ${team.wallet}`)
    return [team, true];
  }
  return [team, false];
}
onMounted(async () => {
  // Fetch team
  const [team, abort] = await getTeam();
  if (abort) return;

  // Initialize wallet
  const initializeWalletsResponse = await fetchAPI("POST", `/teams/${team.id}/challenges/initialize_wallet`);
  if (!initializeWalletsResponse.challengeId) {
    console.log("Cannot initialize wallet", initializeWalletsResponse)
    return;
  }
  const { userToken, encryptionKey, challengeId } = initializeWalletsResponse;
  const sdk = new W3SSdk({})
  sdk.setAppSettings({ appId : constants.APPID  });
  sdk.setAuthentication({ userToken, encryptionKey })
  sdk.execute(challengeId, async (error, result) => {
      if (error) {
        console.error(`Erroe: ${error?.message ?? 'Error!'}`)
        return
      }
      console.info(`Challenge: ${result?.type}, Status: ${result?.status}`)
      const team = await getTeam();
    })
  })
  

</script>

<template>
  <div>
dsqd

  </div>
</template>
