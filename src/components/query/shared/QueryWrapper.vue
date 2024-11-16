<script setup lang="ts">
import ButtonElement from "@/components/shared/ButtonElement.vue";
import ItemColumn from "@/components/shared/ItemColumn.vue";
import Spinner from "@/components/shared/Spinner.vue";
import JsonViewer from "../../shared/JsonViewer.vue";
import type { UseQuery } from "./useQuery";

defineProps<{ query: UseQuery<unknown> }>();
defineEmits<{ submit: void }>();
</script>

<template>
  <ItemColumn>
    <slot />
    <div class="row">
      <ButtonElement @click="$emit('submit')">Submit</ButtonElement>
    </div>
    <Spinner v-if="query.loading" />
    <JsonViewer :data="query.response" />
  </ItemColumn>
</template>
