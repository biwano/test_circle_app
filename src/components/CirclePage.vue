<script setup lang="ts">
import { useProfileStore } from "@/stores/counter";
import type { UserContext } from "@/types";
import { useApi } from "@/utils/useApi";
import { createClient } from "@supabase/supabase-js";
import { onMounted, ref } from "vue";
import Info from "./InfoCard.vue";
import QueryCard from "./query/QueryCard.vue";
import CardColumn from "./shared/CardColumn.vue";

const { profile } = useProfileStore();

const { getAPI } = useApi();

const getToken = async () => {
  try {
    const supabase = createClient(
      profile.SUPABASE.URL,
      profile.SUPABASE.ANON_KEY,
    );
    const response = await supabase.auth.signInWithPassword({
      email: profile.SUPABASE.EMAIL,
      password: profile.SUPABASE.PASSWORD,
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
});
</script>

<template>
  <CardColumn>
    <Info :ctx="userContext" />
    <QueryCard :userContext="userContext" />
  </CardColumn>
</template>
