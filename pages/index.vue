<template>
  <core-content
    :document-id="documentId"
    :slices="slices"
    :banner-type="bannerType"
    :title="title"
    :content="content"
    :video-url="videoUrl"
    :poster="desktopUrl"
    :desktop-url="desktopUrl"
    :mobile-url="mobileUrl"
    :image-alt="imageAlt"
  ></core-content>
</template>

<script>
import CoreContent from "../templates/CoreContent";

export default {
  head () {
    return {
      title: this.seoTitle,
      transition: {
        name: 'page',
        mode: 'out-in'
      },
      meta: [
        { hid: 'description', name: 'description', content: this.seoDesc },
        { hid: 'og:url', property: 'og:url', content: this.seoUrl },
        { hid: 'og:image', property: 'og:image', content: this.seoImage },
        { hid: 'og:title', property: 'og:title', content: this.seoTitle },
        { hid: 'og:description', property: 'og:description', content: this.seoDesc },
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:domain', name: 'twitter:domain', value: this.seoUrl },
        { hid: 'twitter:title', name: 'twitter:title', value: this.seoTitle },
        { hid: 'twitter:description', name: 'twitter:description', value: this.seoDesc },
        { hid: 'twitter:image', name: 'twitter:image', content: this.seoImage },
        { hid: 'twitter:url', name: 'twitter:url', value: this.seoUrl }
      ],
      link: [
        { hid: 'image_src', rel: 'image_src', href: this.seoImage }
      ]
    }
  },
  components: {
    CoreContent
  },
  async asyncData ({ app, params, error, store }) {
    try {
      let entry = await store.dispatch('content/getContentDocByUID', 'home-page');
      let data = entry.data;

      return {
        document: entry,
        documentId: entry.id,
        homeData: data,
        title: data.title,
        content: data.content,
        bannerType: data.banner_type,
        videoUrl: data.hero_video.url,
        desktopUrl: data.hero_image.url,
        mobileUrl: data.hero_image.mobile.url,
        imageAlt: data.hero_image.alt_text,
        slices: data.body
      }
    } catch (err) {
      error({statusCode: 404, message: `The page you are looking for does not exist. `, err: err})
    }
  },
  computed: {
    seoTitle () {
      if (this.homeData.meta_title) {
        return this.homeData.meta_title
      } else {
        return this.homeData.title
      }
    },
    seoDesc () {
      if (this.homeData.meta_description) return this.homeData.meta_description
      return this.homeData.excerpt
    },
    seoImage () {
      if (this.homeData.meta_image) return this.homeData.meta_image.url
      return this.homeData.hero_image.url
    },
    seoUrl () {
      return `${this.$store.getters.baseUrl}${this.$route.fullPath}`
    }
  }
}
</script>

<style scoped lang="scss">

</style>
