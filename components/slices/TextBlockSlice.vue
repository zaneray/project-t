<template>
    <base-text-block
      :text="$prismic.asHtml(fields.text)"
      :theme="fields.theme"
      :font_size="fields.font_size"
    ></base-text-block>
</template>

<script>
  import BaseTextBlock from "../base/BaseTextBlock";

  export default {
    components: {BaseTextBlock},
    name: "text-block-slice",
    props: {
      fields: Object
    }
  }
</script>

<style scoped lang="scss">

</style>
