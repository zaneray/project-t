<template>

  <section class="faq-group component-padding">
    <layout-container content>
      <div v-html="$prismic.asHtml(fields.faq_title)"></div>
      <div v-for="(item, index) in items" :key="index" class="faq-block">
        <h4 class="faq-question">{{item.question}}</h4>
        <div v-html="$prismic.asHtml(item.answer)" class="faq-answer"></div>
      </div>
    </layout-container>
  </section>
</template>

<script>
  import LayoutContainer from "../layout/LayoutContainer";

  export default {
    components: {LayoutContainer},
    name: "faq-group",
    props: {
      items: Array,
      fields: Object
    },
  }
</script>

<style scoped lang="scss">
  .faq-group {
  }

  .faq-block {
    margin-bottom: $margin-medium;
  }
</style>
