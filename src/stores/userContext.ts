import type { Team, UserContext, Wallet } from "@/types";
import { defineStore } from "pinia";

const EMPTY_CONTEXT: UserContext = {
  token: undefined,
  team: undefined,
  wallet: undefined,
};

export const useUserContextStore = defineStore("userContext", {
  state: () => ({ ctx: EMPTY_CONTEXT }),
  actions: {
    setToken(token: string) {
      this.ctx = {
        ...this.ctx,
        token,
      };
    },
    setWallet(wallet: Wallet) {
      this.ctx = {
        ...this.ctx,
        wallet,
      };
    },
    setTeam(team: Team) {
      this.ctx = {
        ...this.ctx,
        team,
      };
    },
  },
});
