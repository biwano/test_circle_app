import config from "@/config";
import { defineStore } from "pinia";

export const useProfileStore = defineStore("profile", {
  state: () => ({ profileIndex: 0 }),
  actions: {
    setProfileIndex(newProfileIndex: number) {
      this.profileIndex = newProfileIndex;
    },
  },
  getters: {
    profile(state) {
      return config.PROFILES[state.profileIndex];
    },
  },
});
