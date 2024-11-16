<template>
  <div>
    <slot />
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: row;
  gap: var(--item-gap);
}
</style>
