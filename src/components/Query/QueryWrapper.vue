<script setup lang="ts">
import Response from './ResponseComponent.vue'

defineProps<{ response?: string }>()
defineEmits<{ submit: void }>()
</script>

<template>
  <div>
    <div class="item-column">
      <slot />
      <div class="row">
        <button @click="$emit('submit')">Submit</button>
      </div>
      <Response :response="response" />
    </div>
  </div>
</template>
