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

const  initializeWallets = async() => {
    return fetchAPI("POST", "/teams/2/challenges/initialize_wallet");
};
const getWallets = async() => {
  return fetchAPI("GET", "/teams/2/wallets");
};

onMounted(async () => {
  // Fetch team
  const team  = await fetchAPI("GET", "/teams/default");
  if (!team.id) {
    console.error("Cannot fetch team.")
    return;
  }
  
  // Get wallets
  const wallets = await fetchAPI("GET", `/teams/${team.id}/wallets`);
  if (wallets && !wallets.error) {
    console.info("Wallet found", wallets)
    return;
  }
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
  sdk.execute(challengeId, (error, result) => {
      if (error) {
        console.error(`Erroe: ${error?.message ?? 'Error!'}`)
        return
      }
      console.info(`Challenge: ${result?.type}, Status: ${result?.status}`)
    })
  })

</script>

<template>
  <div>
dsqd

  </div>
</template>
