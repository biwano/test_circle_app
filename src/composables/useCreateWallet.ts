import { useProfileStore } from "@/stores/profile"
import { useUserContextStore } from "@/stores/userContext"
import type { Challenge } from "@/types/challenge"
import { executeChallenge } from "@/utils/challenge"
import { ref } from "vue"

export function useCreateWallet() {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const ctx = useUserContextStore()
  const profileStore = useProfileStore()

  async function createWallet() {
    if (!ctx.token) {
      error.value = "Not authenticated"
      return
    }

    loading.value = true
    error.value = null

    try {
      const challenge = (await ctx.api.post("/wallets?team=default", {
        token: ctx.token,
      })) as Challenge

      await executeChallenge(challenge, profileStore.profile.APPID)
    } catch (e) {
      error.value =
        e instanceof Error ? e.message : "Failed to create wallet"
      console.error(e)
    } finally {
      loading.value = false
    }
  }

  return { createWallet, loading, error }
}
