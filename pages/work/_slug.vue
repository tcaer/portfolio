<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
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
  computed: {
    document: function() {
      return documentToHtmlString(this.work.fields.info);
    }
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
    <section class='work-content'>
      <span class='title' v-html='work.fields.title' />
      <span class='description' v-html='work.fields.description' />
      <span class='info' v-html='document' />
    </section>
    <Footer :resumeLink='resumeLink' />
  </main>
</template>

<style lang="scss">
.work-content {
  padding: 10vh 4%;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  flex-direction: column;

  .title {
    font-family: 'Chivo', sans-serif;
    font-size: 5vw;
    color: #fff;
  }
  .description {
    font-size: 1em;
    padding-top: 8px;
    font-family: 'Helvetica';
    color: #919191;
  }
  .info {
    padding-top: 40px;
    font-family: 'Helvetica';
    font-size: 1rem;
    width: 40vw;
    line-height: 1.4rem;
    color: #fff;

    p {
      margin-bottom: 1.5em;
    }
    a {
      color: #919191;
      text-decoration: none;
      position: relative;
      &::before {
        transform: scaleX(0);
        transform-origin: center right;
        content: '';
        top: 100%;
        left: 0;
        right: 0;
        height: .125rem;
        position: absolute;
        background-color: rgba(255, 255, 255, 0.9);
        transition-delay: .1s;
        transition: transform .15s cubic-bezier(.445,.05,.55,.95);
      }
      &:hover {
        color: #fff;
        &::before {
          transform: scaleX(1);
          transform-origin: center left;
          transition-delay: 0s;
        }
      }
      @media only screen and (max-width: 670px) {
        width: 100%;
      }
    }
  }
}
</style>
