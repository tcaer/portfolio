<template>
  <main>
    <section class='work'>
      <li class='line' v-for='work in works' :key='work.title'>
        <NuxtLink :to="{name: 'work-slug', params: {slug: work.fields.slug}}" class='link'>
          <span class='title'>{{ work.fields.title }}</span>
          <span class='summary'>{{ work.fields.summary }}</span>
        </NuxtLink>
      </li>
    </section>
  </main>
</template>

<script>
import { createClient } from '../plugins/contentful';

const client = createClient();

export default {
  asyncData({env}) {
    return Promise.all([
      client.getEntries({
        content_type: 'workShowcase'
      })
    ]).then(([entries]) => {
      console.log(entries.items)
      return {
        works: entries.items
      };
    }).catch(console.error)
  }
}
</script>

<style>
</style>

