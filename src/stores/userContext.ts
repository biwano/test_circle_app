import type { Team, UserContext, Wallet } from "@/types";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

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

  return { ctx, setToken, setWallet, setTeam, wallet, team, token };
});
