<script setup lang="ts">
import { useProfileStore } from "@/stores/profile";
import { useUserContextStore } from "@/stores/userContext";
import InfoCard from "./InfoCard.vue";
import ProfileCard from "./ProfileCard.vue";
import QueryCard from "./query/QueryCard.vue";
import CardColumn from "./shared/CardColumn.vue";

const { profile } = useProfileStore();
const userContextStore = useUserContextStore();
</script>

<template>
  <CardColumn>
    <ProfileCard />
    <InfoCard />
    <QueryCard />
  </CardColumn>
</template>
