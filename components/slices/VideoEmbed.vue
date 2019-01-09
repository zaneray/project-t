<template>
  <section class="video-embed">
    <div class="video-embed-wrapper" :style="{paddingBottom: ((fields.embed.height/fields.embed.width) * 100) + '%'}" v-html="fields.embed.html"></div>

  </section>
</template>

<script>
  export default {
    name: "video-embed",
    props: {
      fields: Object
    }
  }
</script>

<style  lang="scss">
  .video-embed-wrapper {
    position: relative;
    padding-bottom: 56.25%;


    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
</style>
