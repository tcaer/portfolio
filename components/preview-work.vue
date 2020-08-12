<script>
export default {
  props: ['title', 'summary', 'slug']
}
</script>

<template>
  <li class='line'>
    <NuxtLink :to="{name: 'work-slug', params: {slug}}" class='link'>
      <span class='title'>{{ title }}</span>
      <span class='summary'>{{ summary }}</span>
    </NuxtLink>
  </li>
</template>

<style lang="scss" scoped>
.line {
  margin-bottom: 4vw;
  padding: .25em 0 0;
  list-style-type: none;

  @media only screen and (min-width: 576px) {
    margin-bottom: 1vw;
    .title {
      font-size: 3rem;
    }
  }
}
.link {
  text-decoration: none;
  display: flex;
  flex-direction: column;

  .title {
    font-size: 2rem;
    color: #fff;
    font-family: 'Chivo', sans-serif;
    padding: .05em 0;
    @media only screen and (min-width: 770px) and (orientation: landscape) {
      font-size: 7vmax;
    }
  }
  .summary {
    color: #fff;
    font-family: 'Helvetica';
    text-transform: uppercase;
    font-size: .825em;
    transform: translateY(14px);
    opacity: 0;
    transition: all .3s cubic-bezier(.19,1,.22,1) .1s;
    @media only screen and (max-width: 770px) {
      opacity: 1;
      transform: translateY(0);
      font-size: .630em;
    }
  }
  &:hover .summary {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
