<script setup lang="ts">
import Spinner from "@/components/shared/Spinner.vue";
import Response from "./ResponseElement.vue";
import type { UseQuery } from "./useQuery";

defineProps<{ query: UseQuery }>();
defineEmits<{ submit: void }>();
</script>

<template>
  <div>
    <div class="item-column">
      <slot />
      <div class="row">
        <button @click="$emit('submit')">Submit</button>
      </div>
      <Spinner v-if="query.loading" />
      <Response :response="query.response" />
    </div>
  </div>
</template>
