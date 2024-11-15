<script setup>
import Response from "./Response.vue";
defineProps(["response"]);
</script>

<template>
  <div>
    <div class="column">
      <slot />
      <div class="row">
        <button v-on:click="$emit('submit')">Submit</button>
      </div>
      <Response :response="response" />
    </div>
  </div>
</template>
