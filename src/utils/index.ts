import constants from "@/constants";
import type { UserContext } from "@/types";

interface QueryArgs {
  token?: string;
  method?: RequestInit["method"];
}
export const cutString = (text?: string) => {
  if (!text) return;
  if (text.length < 10) return text;
  return `${text.substring(0, 5)}...${text.substring(text.length - 5)}`;
};

const fetchAPI = async (path: string, { method, token }: QueryArgs) => {
  return (
    await fetch(`${constants.CARBONMARK_API_URL}${path}`, {
      method,
      headers: {
        ...(token ? { Authorization: `Bearer ${token}` } : undefined),
      },
    })
  ).json();
};

export const getAPI = async (path: string, queryArgs: QueryArgs) => {
  return fetchAPI(path, {
    ...queryArgs,
    method: "GET",
  });
};

export const postAPI = async (path: string, queryArgs: QueryArgs) => {
  return fetchAPI(path, {
    ...queryArgs,
    method: "GET",
  });
};

export const getQueryArgs = (ctx: UserContext) => {
  return {
    token: ctx.token,
  };
};
