import config, { type Profile } from "@/config";
import { defineStore } from "pinia";

export const useProfileStore = defineStore("profile", {
  state: () => ({ profile: config.PROFILES[0] }),
  actions: {
    setProfile(newProfile: Profile) {
      this.profile = newProfile;
    },
  },
});
