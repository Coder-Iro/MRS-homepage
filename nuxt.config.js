import meta from './assets/meta.json'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: meta.title,
    htmlAttrs: {
      lang: 'ko',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:type', content: 'website' },
      { name: 'theme-color', content: meta.color },
      { name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:title', name: 'twitter:title', content: meta.title },
      { hid: 'og:title', property: 'og:title', content: meta.title },
      { property: 'twitter:domain', content: meta.domain },
      { hid: 'og:url', property: 'og:url', content: 'https://' + meta.domain },
      {
        hid: 'twitter:url',
        property: 'twitter:url',
        content: 'https://' + meta.domain,
      },
      { hid: 'description', name: 'description', content: meta.description },
      {
        hid: 'og:desciption',
        property: 'og:description',
        content: meta.description,
      },
      {
        hid: 'twitter:desciption',
        name: 'twitter:description',
        content: meta.description,
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://' + meta.domain + meta.img,
      },
      {
        hid: 'twitter:image',
        property: 'twitter:image',
        content: 'https://' + meta.domain + meta.img,
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
