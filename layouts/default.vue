<template>
  <div>
    <nuxt/>
  </div>
</template>

<style>
html, body {
  width: 100vw;
  background: #000;
  margin: 0;
  padding: 0;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  opacity: 1;
  overflow-x: hidden;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
.page-enter-active,
.page-leave-active {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(.19,1,.22,1);
  transition-duration: 400ms;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>

