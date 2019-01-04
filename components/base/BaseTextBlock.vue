<template>
  <theme :theme="theme">
    <section class="text-block">
      <layout-container content>
        <div v-html="$prismic.asHtml(text)" :class="['columns-'  + layout, 'font-size-'  + font_size]"></div>
      </layout-container>
    </section>
  </theme>
</template>

<script>
  import LayoutContainer from "../layout/LayoutContainer";
  import Theme from "../utility/Theme";

  export default {
    name: "base-text-block",
    components: {
      Theme,
      LayoutContainer
    },
    props: {
      fields: {
        type: Object
      },
      layout: {
        type: String
      },
      text: {
        type: Object
      },
      font_size: {
        type: String,
        default: 'base',
        validator: function (value) {
          return ['small', 'base', 'large'].indexOf(value) !== -1
        }
      }

    }
  }
</script>

<style scoped lang="scss">
  .text-block {
    padding-top: $margin-large;
    padding-bottom: $margin-large;
  }

  .columns-2 {
    @media (min-width: $screen-sm) {
      column-count: 2;
      column-gap: $gutter;
    }
  }

  .font-size-base {
    font-size: $font-size-small;

    p {
      font-size: $font-size-small;
    }
  }

  .font-size-small {
    font-size: $font-size-xsmall;

    p {
      font-size: $font-size-xsmall;
    }
  }

  .font-size-large {
    font-size: $font-size-medium;
    p {
      font-size: $font-size-medium;
    }
  }

  div[data-oembed-type='video'] {
    margin-bottom: $margin-base;
    width: 100%;
    background: green;
  }

</style>
