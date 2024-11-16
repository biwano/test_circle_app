<template>
  <div class="row"><slot /></div>
</template>

<style scoped>
.row {
  display: flex;
  gap: 1rem;
}
.row:deep(div) {
  flex: 1 1 0;
  padding: var(--item-padding);
  display: flex;
  align-items: center;
}
.row:deep(div:first-child) {
  font-weight: bolder;
  background-color: var(--inactivesurface-background-color);
}
.row:deep(div:nth-child(2)) {
  flex: 2 1 0;
  color: black;
}
</style>
