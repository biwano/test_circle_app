import { useProfileStore } from "@/stores/profile";
import { computed } from "vue";
import { Api } from "./api";

export function useApi() {
  const { profile } = useProfileStore();
  const api = computed(() => new Api(profile));
  return api;
}
