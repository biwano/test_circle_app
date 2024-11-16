export type Team = {
  uuid: string
  name: string
  wallets: string[]
}

export interface Wallet {
  address: string
  uuid: string
}

export interface UserContext {
  wallet: Wallet
  team: Team
  token: string
}
