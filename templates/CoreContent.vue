<template>
  <div class="wrapper">
    <prismic-preview :documentId="documentId">
      <hero-video v-if="bannerType === 'video'"
                  :title="title"
                  :content="content"
                  :video-url="videoUrl"
                  :poster="poster">
      </hero-video>
      <hero-banner v-else
                   :title="title"
                   :content="content"
                   :desktop-url="desktopUrl"
                   :mobile-url="mobileUrl"
                   :image-alt="imageAlt">
      </hero-banner>
      <slice-loader :slices="slices"></slice-loader>
    </prismic-preview>
  </div>
</template>

<script>
  import HeroBanner from '../components/banners/HeroBanner.vue';
  import HeroVideo from '../components/banners/HeroVideo.vue';

  export default {
    name: "core-content",
    components: {
      HeroBanner,
      HeroVideo
    },
    props: {
      documentId: {
        type: String,
        required: true
      },
      slices: Array,
      bannerType: String,
      title: Array,
      content: Array,
      videoUrl: String,
      poster: String,
      desktopUrl: String,
      mobileUrl: String,
      imageAlt: String
    },
  }
</script>

<style scoped lang="scss">
  .wrapper {
    width: 100%;
  }

  .container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
</style>
