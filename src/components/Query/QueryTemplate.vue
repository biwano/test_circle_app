<script setup>
import Response from "./ResponseComponent.vue";
defineProps({ response: Object });
defineEmits({ submit: String });
</script>

<template>
  <div>
    <div class="column">
      <slot />
      <div class="row">
        <button @click="$emit('submit')">
          Submit
        </button>
      </div>
      <Response :response="response" />
    </div>
  </div>
</template>
