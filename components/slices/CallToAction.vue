<template>
  <theme :theme="fields.theme">
    <section class="call-to-action">
      <callout-content class="callout-content"
                       :title="$prismic.asHtml(fields.cta_title)"
                       :content="$prismic.asHtml(fields.cta_content)"
                       :links="items"
                       :link_text="$prismic.asText(fields.cta_title)"
                       :alignment="'center'">
      </callout-content>
      <base-picture v-if="fields.background_image.url" class="call-to-action-image"
        :mobileImg="fields.background_image.mobile.url"
        :desktopImg="fields.background_image.url"
        :altText="fields.background_image.alt ? fields.background_image.alt : $prismic.asText(fields.cta_title)">
      </base-picture>
    </section>
  </theme>
</template>

<script>
  import CalloutContent from "../utility/CalloutContent";
  import Theme from "../utility/Theme";
  import BasePicture from "../base/BasePicture";

  export default {
    components: {
      BasePicture,
      Theme,
      CalloutContent
    },
    name: "call-to-action",
    data() {
      return {
        // title: "color-quote"
      }
    },
    props: {
      fields: Object,
      items: Array
    }
  }
</script>

<style scoped lang="scss">
  .call-to-action {
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .callout-content {
    position: relative;
    z-index: $callout-content-z-index;
  }

  .call-to-action-image {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    left: 0;
    top: 0;
    z-index: $callout-bg-z-index;
  }


  a {
    z-index: $z-index-level-page + 1;
    position: relative;
  }
</style>
