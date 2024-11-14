import constants from "@/constants";

export const cutString = (text?: string) => {
  if (!text) return;
  if (text.length < 10) return text;
  return `${text.substring(0, 5)}...${text.substring(text.length - 5)}`;
};

const fetchAPI = async (method: string, path: string, token: string) => {
  return (
    await fetch(`${constants.CARBONMARK_API_URL}${path}`, {
      method,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  ).json();
};

export const getAPI = async (token: string, path: string) => {
  return fetchAPI("GET", path, token);
};

export const postAPI = async (token: string, path: string) => {
  return fetchAPI("POST", path, token);
};
