<template>
  <section class="hero-video">
    <theme :theme="'dark'">
    <callout-content class="callout-content"
      :title="$prismic.asHtml(title)"
      :content="$prismic.asHtml(content)"
    >
    </callout-content>
    <video class="video-src" autoplay="autoplay"
           loop="loop" muted="muted"
           :poster="poster">
      <source :src="videoUrl" type="video/mp4">
    </video>
    </theme>
  </section>
</template>

<script>
  import CalloutContent from "../utility/CalloutContent";
  import Theme from "../utility/Theme";

  export default {
    components: {
      Theme,
      CalloutContent},
    name: "hero-video",
    data() {
      return {
      }
    },
    props: [
      'videoUrl',
      'poster',
      'title',
      'content'
    ]
  }
</script>

<style lang="scss" scoped>
  .hero-video {
    position: relative;
    width: 100%;
    z-index: $callout-bg-z-index;
  }

  .callout-content {
    position: absolute;
    z-index: $callout-bg-z-index;
  }

  .video-src {
    width: 100%;
    height: 100%;
    display: block;
    opacity: .85;
  }
</style>
