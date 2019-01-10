<template>
  <header :class="{'fixed': fixed}">
    <layout-container class="masthead-content">
      <nuxt-link class="logo-link" to="/">
        <site-logo></site-logo>
      </nuxt-link>
      <nav>
        <div class="navbar-item" v-for="(link, index) in headerLinks" :key="index">
          <prismic-link :link="link.primary.link">{{link.primary.link_label}}</prismic-link>
        </div>
      </nav>
    </layout-container>
  </header>
</template>

<script>
  import LayoutContainer from "../layout/LayoutContainer.vue";

  export default {
    name: 'AppMasthead',
    components: {LayoutContainer},
    props: [
      'fixed',
      'headerLinks'
    ],
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/global.scss";

  header {
    padding: $margin-base 0;
    text-align: center;
    position: absolute;
    z-index: $header-z-index;
    width: 100%;

    @media (min-width: $screen-sm) {

    }

  }

  .logo-link {
    width: 180px;
    display: block;
    margin: 0 auto;
    @media (min-width: $screen-sm) {
      margin: 0;
    }
  }

  .masthead-content {


    @media (min-width: $screen-sm) {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  a {
    color: $color-white;
  }

  header.fixed {
  }

  img {
    height: 30px;
  }



  nav {
    display: none;
    @media (min-width: $screen-sm) {
      display: block;
    }
  }

  .navbar-item {
    display: inline-block;
    margin: 0 10px;
    color: $color-primary;
    font-size: $font-size-small;
    text-transform: uppercase;
  }
</style>
