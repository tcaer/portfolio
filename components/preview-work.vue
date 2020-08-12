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
