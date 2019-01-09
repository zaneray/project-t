<template>
  <section>
    <div v-for="slice in slices">
      <image-banner v-if="slice.slice_type === 'image_banner'" :fields="slice.primary" :items="slice.items"></image-banner>
      <color-quote v-if="slice.slice_type === 'quote_with_color'" :fields="slice.primary"></color-quote>
      <split-callout v-else-if="slice.slice_type === 'split_callout'" :fields="slice.primary"></split-callout>
      <call-to-action v-else-if="slice.slice_type === 'call_to_action'" :fields="slice.primary"></call-to-action>
      <text-block-slice v-else-if="slice.slice_type === 'text_block'" :fields="slice.primary"></text-block-slice>
      <text-block-slice v-else-if="slice.slice_type === 'text'" :fields="slice.primary"></text-block-slice>
      <gallery-grid v-else-if="slice.slice_type === 'gallery'" :fields="slice.primary" :items="slice.items"></gallery-grid>
      <video-embed v-else-if="slice.slice_type === 'video_embed'" :fields="slice.primary"></video-embed>
      <related-content v-else-if="slice.slice_type === 'related_content'" :items="slice.items"></related-content>
      <faq-group v-else-if="slice.slice_type === 'faq'" :fields="slice.primary" :items="slice.items"></faq-group>

    </div>
  </section>
</template>

<script>
  import ColorQuote from '../slices/ColorQuote.vue';
  import SplitCallout from '../slices/SplitCallout.vue';
  import CallToAction from '../slices/CallToAction.vue';
  // import TextBlock from '../base/BaseTextBlock.vue';
  import ImageBanner from "../slices/ImageBanner";
  import RelatedContent from "../slices/RelatedContent";
  import TextBlockSlice from "../slices/TextBlockSlice";
  import GalleryGrid from "../slices/GalleryGrid";
  import VideoEmbed from "../slices/VideoEmbed";
  import FaqGroup from "../slices/FaqGroup";

  export default {
    name: "slice-loader",
    components: {
      FaqGroup,
      VideoEmbed,
      GalleryGrid,
      TextBlockSlice,
      RelatedContent,
      ImageBanner,
      ColorQuote,
      SplitCallout,
      CallToAction
    },
    data() {
      return {
        title: "slice-loader"
      }
    },
    props: {
      slices: Array
    }
  }
</script>

<style scoped>

</style>
