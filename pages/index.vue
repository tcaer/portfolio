<template>
  <main>
    <hero />
    <section class='work'>
      <ul>
        <PreviewWork 
          v-for='work in works' :key='work.fields.slug' :title='work.fields.previewTitle' 
          :summary='work.fields.shortDescription' :slug='work.fields.slug' />
      </ul>
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
        content_type: 'workShowcase',
        order: '-fields.order'
      })
    ]).then(([entries]) => {
      return {
        works: entries.items
      };
    }).catch(console.error)
  }
}
</script>

<style lang='scss' scoped>
.work {
  padding: 0 4%;

  ul {
    padding: 0;
  }
}
</style>

