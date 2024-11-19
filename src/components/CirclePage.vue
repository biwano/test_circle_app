<script setup lang="ts">
import InfoCard from "./InfoCard.vue";
import ProfileCard from "./ProfileCard.vue";
import QueryCard from "./query/QueryCard.vue";
import CardColumn from "./shared/CardColumn.vue";
</script>

<template>
  <CardColumn>
    <ProfileCard />
    <InfoCard />
    <QueryCard />
  </CardColumn>
</template>
