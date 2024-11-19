import type { Profile } from "@/config";

interface QueryArgs {
  token?: string;
  method?: RequestInit["method"];
}

export class Api {
  profile: Profile;
  base_url: string;
  constructor(profile: Profile) {
    this.profile = profile;
    this.base_url = this.profile.CARBONMARK_API_URL;
  }

  async fetch(path: string, { method, token }: QueryArgs) {
    return (
      await fetch(`${this.base_url}${path}`, {
        method,
        headers: {
          ...(token ? { Authorization: `Bearer ${token}` } : undefined),
        },
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
      method: "GET",
    });
  };
}
