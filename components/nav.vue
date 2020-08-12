<template>
  <nav>
    <NuxtLink to='/'>Go Back</NuxtLink>
  </nav>
</template>

<style lang='scss' scoped>
nav {
  padding: 2% 4%;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  background: #000;
  a {
    pointer-events: all;
    color: #fff !important;
    text-decoration: none;
    opacity: .4;
    font-family: 'Chivo', sans-serif;
    transition: opacity 300ms ease;
    &:hover {
      opacity: 1;
    }
  }
  @media screen and (max-width: 770px) {
    padding: 8% 4% !important;
  }
}
</style>
