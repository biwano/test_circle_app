<script setup lang="ts">
import config from "@/config";
import { useProfileStore } from "@/stores/profile";
import { storeToRefs } from "pinia";
import { ref, watch } from "vue";
import Card from "./shared/Card.vue";
import ItemColumn from "./shared/ItemColumn.vue";

const profileStore = useProfileStore();
const { profileIndex: storeProfileIndex } = storeToRefs(profileStore);
const profileIndex = ref(storeProfileIndex.value);

watch(profileIndex, () => profileStore.setProfileIndex(profileIndex.value));
</script>
<template>
  <Card :title="'Profile'">
    <ItemColumn>
      <select :v-model="profileIndex">
        <option
          v-for="(profile, index) in config.PROFILES"
          :key="index"
          :value="index"
          :selected="profileIndex == index"
        >
          {{ profile.NAME }}
        </option>
      </select>
    </ItemColumn>
  </Card>
</template>
<style scoped></style>
