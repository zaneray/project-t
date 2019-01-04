<template>
  <prismic-preview :documentId="documentId">

    <hero-banner
      :title="entry.title"
      :content="entry.subtitle"
      :desktopUrl="entry.hero_image.url"
      :mobileUrl="entry.hero_image.mobile.url"
      :imageAlt="entry.hero_image.alt">
    </hero-banner>
    <router-link to="/stories" class="back-link">< Back</router-link>
    {{entry.date}}
    <base-text-block
      :theme="'light'"
      :text="entry.content"
    ></base-text-block>
  </prismic-preview>
</template>

<script>
  import LayoutContainer from "../../components/layout/LayoutContainer";
  import HeroBanner from "../../components/banners/HeroBanner";
  import BaseTextBlock from "../../components/base/BaseTextBlock";


  export default {
    name: "StoryItem",
    components: {
      BaseTextBlock,
      HeroBanner,
      LayoutContainer
    },
    transition: {
      name: 'page',
      mode: 'out-in'
    },
    async asyncData({app, params, error, store}) {
      try {
        let document = await store.dispatch('stories/getStoryItemById', params.slug)

        return {
          document: document,
          documentId: document.id,
          entry: document.data
        }
      } catch (err) {
        error({statusCode: 404, message: `The page you are looking for does not exist. `, err: err})
      }
    },
    mounted() {
      console.log('CTA Data', this.entry);

    }
  }
</script>

<style scoped lang="scss">
  .back-link {
    display: block;
    font-size: 20px;
  }

</style>
