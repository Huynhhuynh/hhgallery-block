export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'myblog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }, 
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,300;0,400;0,700;1,400&display=swap' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/scss/theme.scss',
    'github-markdown-css/github-markdown.css',
		'highlight.js/styles/github.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/graphcms.js',
    { src: '~/plugins/global-components.js', mode: 'client' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    '@nuxtjs/bulma',
    '@nuxtjs/markdownit'
  ],

  markdownit: {
    injected: true,
    preset: 'default',
    linkify: true,
    breaks: true,
    use: [
      'markdown-it-div',
      'markdown-it-attrs'
    ],
    highlight: function(str, lang) {
			const hljs = require('highlight.js');
			if (lang && hljs.getLanguage(lang)) {
				try {
				return '<pre class="hljs"><code>' +
					hljs.highlight(lang, str, true).value +
					'</code></pre>';
				} catch (__) {}
			}
			return '<pre class="hljs"><code>' + hljs.highlight('plaintext', str, true).value + '</code></pre>'
		}
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
  }
}
