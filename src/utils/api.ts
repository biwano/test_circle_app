import type { Profile } from "@/config";
import type { UserContext } from "@/types";

interface QueryArgs {
  token?: string;
  method?: RequestInit["method"];
  body?: Record<string, unknown>;
}

export class Api {
  profile: Profile;
  base_url: string;
  constructor(profile: Profile) {
    this.profile = profile;
    this.base_url = this.profile.CARBONMARK_API_URL;
  }

  async fetch(path: string, { method, token, body }: QueryArgs) {
    const jsonBody =
      method === "POST" ? JSON.stringify(body ?? {}) : undefined;

    return (
      await fetch(`${this.base_url}${path}`, {
        method,
        headers: {
          ...(token ? { Authorization: `Bearer ${token}` } : undefined),
          ...(jsonBody ? { "Content-Type": "application/json" } : undefined),
        },
        body: jsonBody,
      })
    ).json();
  }

  get = async (path: string, queryArgs: QueryArgs) => {
    return this.fetch(path, {
      ...queryArgs,
      method: "GET",
    });
  };

  post = async (path: string, queryArgs: QueryArgs) => {
    return this.fetch(path, {
      ...queryArgs,
      method: "POST",
    });
  };
}

export const getQueryArgs = (ctx: UserContext) => {
  return {
    token: ctx.token,
  };
};
