<template>
  <div id="app" class="app-wrapper">
    <app-masthead :headerLinks="headerLinkData"  :fixed="true"></app-masthead>
    <main>
      <nuxt/>
    </main>
    <app-footer :footerLinks="footerLinkData"></app-footer>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import AppMasthead from '../components/decorator/AppMasthead.vue';
  import AppFooter from '../components/decorator/AppFooter.vue';


  export default {
    name: 'BaseLayout',
    components: {
      AppMasthead,
      AppFooter
    },
    computed: {
      ...mapGetters({
        headerLinks: 'navigation/headerLinks',
        footerLinks: 'navigation/footerLinks'
      }),
      headerLinkData() {
        return this.headerLinks ? this.headerLinks.data.nav : null
      },
      footerLinkData() {
        return this.footerLinks ? this.footerLinks.data.nav : null
      }
    },
    beforeMount() {
      //Register service worker globally
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
          navigator.serviceWorker.register('/sw.js').then(function(registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
          }, function(err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
          });
        });
      }
    }
  }
</script>

<style scoped lang="scss">
  app-masthead {
    position: relative;
    z-index: $header-z-index;
  }

  main {
    position: relative;
    z-index: $main-page-z-index;
  }

  app-footer {
    z-index: $footer-z-index;
  }
</style>
