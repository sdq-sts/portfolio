const nodeExternals = require('webpack-node-externals')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'portfolio-sadraque',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 'http-equiv': 'content-language', content: 'pt-br' },
      { hid: 'description', name: 'description', content: 'Sadraque Santos' },
      { name: 'author', content: 'Sadraque Santos' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:400,700,900|Six+Caps' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#D71B14' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['vue-awesome'],
    extend (config, ctx) {
      const vueLoader = config.module.rules.find((loader) => loader.loader === 'vue-loader')

      vueLoader.options.transformToRequire = {
        video: 'src',
        source: 'src'
      }

      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      } else {
        config.externals = [ nodeExternals({
          whitelist: [/\.(?!(?:js|json)$).{1,5}$/i, /^vue-awesome/]
        })]
      }
    }
  },

  /*
  ** Custom CSS
  */
  css: ['~/assets/main.css'],

  /*
  ** Plugins
  */
  plugins: [
    { src: '~/plugins/globals.js' }
  ],

  /*
  ** Load Modules
  */
  modules: [
    // '@nuxtjs/bootstrap-vue'
  ]
}
