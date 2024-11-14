<script setup>
import { W3SSdk } from "@circle-fin/w3s-pw-web-sdk";
import { createClient } from "@supabase/supabase-js";
import { onMounted, ref } from "vue";
import constants from "../constants";
import Copiable from "./Copiable.vue";

const fetchAPI = async (token, method, path) => {
  return (
    await fetch(`${constants.CARBONMARK_API_URL}${path}`, {
      method,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  ).json();
};

const getTeam = async (token) => {
  const team = await fetchAPI(token, "GET", "/teams/default");
  let hasWallet = false;
  if (!team?.uuid) {
    console.error("Cannot fetch team.");
  } else if (team?.wallets.length) {
    console.info(`Wallet found: ${team.wallets}`);
    hasWallet = true;
  }
  return {
    team,
    hasWallet,
  };
};
const getToken = async () => {
  let token;
  try {
    const supabase = createClient(
      constants.SUPABASE.URL,
      constants.SUPABASE.ANON_KEY
    );
    const response = await supabase.auth.signInWithPassword({
      email: constants.SUPABASE.EMAIL,
      password: constants.SUPABASE.PASSWORD,
    });
    return response.data.session.access_token;
  } catch (e) {
    console.error(e);
  }
};

const getWallet = async (token, team) => {
  const wallet = await fetchAPI(token, "GET", `/wallets/${team.wallets[0]}`);
  aWallet.value=wallet
  console.info("Wallet", wallet);
  const balances = await fetchAPI(
    token,
    "GET",
    `/wallets/${team.wallets[0]}/balances`
  );
  console.info("Balances", balances);
};

const aToken = ref("");
const aWallet = ref("");
const aTeam = ref("");

onMounted(async () => {
  const token = await getToken();
  
  aToken.value = token;
  // Fetch team
  const { team, hasWallet } = await getTeam(token);
  aTeam.value = team;
  if (hasWallet) {
    getWallet(token, team);
    
    return;
  }

  // Initialize wallet
  const initializeWalletsResponse = await fetchAPI(
    token,
    "POST",
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
  });
});
function copy(event) {
  navigator.clipboard.writeText(aToken.value);
}


</script>
<style>
.wrapper {
  display: flex;
  flex-direction: column;
}
.item {
  display: flex;
  gap: 1rem;
}
.item div:first-child {
  font-weight: bolder;
  font-size: 15px;
}
</style>
<template>
    <div class="wrapper">
      <Copiable :label="'Token'" :value="aToken"></Copiable>
      <Copiable :label="'Team UUID'" :value="aTeam.uuid"></Copiable>
      <Copiable :label="'Team name'" :value="aTeam.name"></Copiable>
      <Copiable :label="'Wallet UUID'" :value=" aWallet.uuid"></Copiable>
      <Copiable :label="'Wallet address'" :value=" aWallet.address"></Copiable>
  </div>
  
</template>
