<script setup lang="ts">
import type { UserContext } from "@/types";
import { getAPI } from "@/utils";
import { createClient } from "@supabase/supabase-js";
import { onMounted, ref } from "vue";
import constants from "../constants";
import Info from "./InfoCard.vue";
import QueryCard from "./query/QueryCard.vue";

const getToken = async () => {
  try {
    const supabase = createClient(
      constants.SUPABASE.URL,
      constants.SUPABASE.ANON_KEY,
    );
    const response = await supabase.auth.signInWithPassword({
      email: constants.SUPABASE.EMAIL,
      password: constants.SUPABASE.PASSWORD,
    });
    return response.data.session?.access_token;
  } catch (e) {
    console.error(e);
  }
};

const userContext = ref<UserContext>({
  team: undefined,
  wallet: undefined,
  token: undefined,
});

onMounted(async () => {
  const token = await getToken();
  if (!token) return;
  userContext.value = {
    ...userContext.value,
    token,
  };

  // Fetch team
  const team = await getAPI(`/teams/default`, { token });
  userContext.value = {
    ...userContext.value,
    team,
  };
  if (team.wallets) {
    const wallet = await getAPI(`/wallets/${team.wallets[0]}`, { token });
    userContext.value = {
      ...userContext.value,
      wallet,
    };
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
});
</script>

<template>
  <div class="card-column">
    <Info :ctx="userContext" />
    <QueryCard :userContext="userContext" />
  </div>
</template>
