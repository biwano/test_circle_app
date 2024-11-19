import { useProfileStore } from "@/stores/profile";
import type { UserContext } from "@/types";
import { computed } from "vue";

interface QueryArgs {
  token?: string;
  method?: RequestInit["method"];
}

export function useApi() {
  const { profile } = useProfileStore();
  const url = computed(() => profile.CARBONMARK_API_URL);

  const getQueryArgs = (ctx: UserContext) => {
    return {
      token: ctx.token,
    };
  };

  const fetchAPI = async (path: string, { method, token }: QueryArgs) => {
    return (
      await fetch(`${url.value}${path}`, {
        method,
        headers: {
          ...(token ? { Authorization: `Bearer ${token}` } : undefined),
        },
      })
    ).json();
  };

  const getAPI = async (path: string, queryArgs: QueryArgs) => {
    return fetchAPI(path, {
      ...queryArgs,
      method: "GET",
    });
  };

  const postAPI = async (path: string, queryArgs: QueryArgs) => {
    return fetchAPI(path, {
      ...queryArgs,
      method: "GET",
    });
  };
  return { getAPI, postAPI, getQueryArgs };
}
