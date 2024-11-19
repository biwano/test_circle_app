import type { Team, UserContext, Wallet } from "@/types";
import { Api } from "@/utils/api";
import { createClient } from "@supabase/supabase-js";
import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useProfileStore } from "./profile";

const EMPTY_CONTEXT: UserContext = {
  token: undefined,
  team: undefined,
  wallet: undefined,
};

export const useUserContextStore = defineStore("userContext", () => {
  const ctx = ref(EMPTY_CONTEXT);
  const wallet = computed(() => ctx.value.wallet);
  const team = computed(() => ctx.value.team);
  const token = computed(() => ctx.value.token);
  const profileStore = useProfileStore();

  function setToken(token: string) {
    ctx.value = {
      ...ctx,
      token,
    };
  }
  function setWallet(wallet: Wallet) {
    ctx.value = {
      ...ctx.value,
      wallet,
    };
  }
  function setTeam(team: Team) {
    ctx.value = {
      ...ctx.value,
      team,
    };
  }

  const getToken = async () => {
    const profile = profileStore.profile;
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

  async function loadContext() {
    const api = new Api(profileStore.profile);
    // Fetch Token
    const token = await getToken();
    if (!token) return;
    setToken(token);

    // Fetch team
    const team = await api.fetch(`/teams/default`, { token });
    setTeam(team);

    if (!team.wallets) return;

    // Fetch wallet
    const wallet = await api.fetch(`/wallets/${team.wallets[0]}`, { token });
    setWallet(wallet);
  }

  profileStore.$onAction(({ after }) => {
    after(() => loadContext());
  });
  loadContext();

  return { ctx, setToken, setWallet, setTeam, wallet, team, token };
});
