const pkg = require('./package')
const resolve = require('path').resolve

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the team
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://static.cdn.prismic.io/prismic.min.js' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    { src: '~assets/styles/global.scss', lang: 'scss' }
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: `~plugins/globalComponents` },
    { src: `~plugins/prismic` }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    //['nuxt-sass-resources-loader', '~assets/styles/variables/variables.scss'],
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    //'bootstrap-vue/nuxt',
    '@nuxtjs/pwa'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    postcss: [
      require('autoprefixer')({
        browsers: ['> 5%']
      })
    ],

    /*
    ** You can extend webpack config hereUnhandledPromiseRejectionWarning:
    */
    extend(config, ctx) {

    }
  }
}
