import PROFILES from "../profiles.json";

const config = {
  ...PROFILES,
};

export type Profile = (typeof config.PROFILES)[0];

export default config;
