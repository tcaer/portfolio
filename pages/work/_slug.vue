<script>
import { createClient } from '../../plugins/contentful';

const client = createClient();

export default {
  data() {
    return {
      resumeLink: '',
      work: {}
    };
  },
  asyncData({ event, params }) {
    return Promise.all([
      client.getEntries({
        content_type: 'workShowcase',
        'fields.slug': params.slug
      }),
      client.getAsset('7bMVdLPniGISe5QpKqe38T')
    ]).then(([entries, resume]) => {
      return {
          work: entries.items[0],
          resumeLink: resume.fields.file.url
        };
    }).catch(console.error);
  },
  head() {
    return {
      title: this.work.fields.pageTitle
    };
  }
}
</script>

<template>
  <main>
    <Nav />
    <Footer :resumeLink='resumeLink' />
  </main>
</template>

<style lang="scss" scoped>

</style>
