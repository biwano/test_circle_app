import type { Challenge } from "@/types/challenge"
import { W3SSdk } from "@circle-fin/w3s-pw-web-sdk"
import type { ChallengeResult } from "@circle-fin/w3s-pw-web-sdk/dist/src/types"

export function executeChallenge(
  challenge: Challenge,
  appId: string,
): Promise<ChallengeResult> {
  const sdk = new W3SSdk({
    appSettings: { appId },
    authentication: {
      userToken: challenge.userToken,
      encryptionKey: challenge.encryptionKey,
    },
  })

  return new Promise((resolve, reject) => {
    sdk.execute(challenge.challengeId, (error, result) => {
      if (error) reject(error)
      else if (result) resolve(result)
      else reject(new Error("Challenge failed"))
    })
  })
}
