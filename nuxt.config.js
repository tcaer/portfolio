module.exports = {
  env: {
    CTF_SPACE_ID: process.env.CTF_SPACE_ID || '',
    CTF_ACCESS_TOKEN: process.env.CTF_ACCESS_TOKEN || ''
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Tino Caer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Tino Caer's personal website" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#000' },
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
 components: true,
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

