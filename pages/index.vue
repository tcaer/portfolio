<script>
import { createClient } from '../plugins/contentful';

const client = createClient();

export default {
  data: function() {
    return {
      works: [],
      resumeLink: ''
    };
  },
  asyncData: function({env}) {
    return Promise.all([
      client.getEntries({
        content_type: 'workShowcase',
        order: '-fields.order'
      }),
      client.getAsset('7bMVdLPniGISe5QpKqe38T')
    ]).then(([entries, resume]) => {
        return {
          works: entries.items,
          resumeLink: resume.fields.file.url
        };
      }).catch(console.error);
  },
  pageTransition: {
    name: 'default',
    mode: ''
  },
  head: {
    titleTemplate: 'Tino Caer'
  }
}
</script>

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
    <Footer :resumeLink='resumeLink' />
  </main>
</template>

<style lang='scss' scoped>
.work {
  padding: 0 4%;

  ul {
    padding: 0;
  }
}
</style>

