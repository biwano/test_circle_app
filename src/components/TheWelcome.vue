<script setup>
import { W3SSdk } from '@circle-fin/w3s-pw-web-sdk'
import { onMounted } from 'vue'



function fetchData() {
    return fetch("http://localhost:3003/teams/50/challenges/initialize_wallet", {
      method: "POST",
      body: JSON.stringify({
        team_uuid: "e10b2efc-dda1-49bf-bc0e-e1d625c4c71e"
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
};
onMounted(async () => {
  const response = await fetchData();
  const data = await response.json();
  console.log(data);
  const { userToken, encryptionKey, challengeId } = data;
  const sdk = new W3SSdk({})
  sdk.setAppSettings({ appId : "8cc35178-2d5c-5d9e-a68d-a771fa72a883"  });
  sdk.setAuthentication({ userToken, encryptionKey })
  window.setTimeout(() => {
    sdk.execute(challengeId, (error, result) => {
        if (error) {
          console.error(`Erroe: ${error?.message ?? 'Error!'}`)
          return
        }
        console.info(`Challenge: ${result?.type}, Status: ${result?.status}`)
      })
    },1000)
})

</script>

<template>
  <div>
dsqd

  </div>
</template>
