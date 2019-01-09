<template>
  <theme :theme="theme">
    <section class="text-block component-padding">
      <layout-container content>
        <div v-html="text" :class="['columns-'  + layout, 'font-size-'  + font_size]"></div>
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
      layout: {
        type: String,
        default: '1'
      },
      text: {
        type: String
      },
      theme: {
        type: String,
        default: 'light'
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
