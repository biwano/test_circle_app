<template>
  <span class="loader"></span>
</template>

<style scoped>
.loader {
  width: 48px;
  height: 48px;
  display: inline-block;
  position: relative;
  background-color: #fff;
  background: radial-gradient(
    ellipse at center,
    var(--interactivesurface-text-color) 0%,
    var(--interactivesurface-text-color) 14%,
    #fff 15%,
    #fff 100%
  );
  background-size: cover;
  background-position: center;
  border-radius: 50%;
}
.loader::after,
.loader::before {
  content: "";
  position: absolute;
  height: 16px;
  width: 4px;
  background: var(--interactivesurface-text-color);
  top: 50%;
  left: 50%;
  transform: translateX(-50%) rotate(0deg);
  transform-origin: 25% 0;
  box-sizing: border-box;
  animation: rotation 10s linear infinite;
}
.loader::before {
  height: 22px;
  width: 2px;
  transform: translateX(-50%) rotate(0deg);
  animation-duration: 1s;
}
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
