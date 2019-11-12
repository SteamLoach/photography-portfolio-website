import { CMSConfig } from './cms/cms.config.js';

import axios from 'axios';

export default {
  mode: 'universal',
  
  generate: {
     
    routes: async () => {
      let { data } = await axios.get(`${CMSConfig.ProjectSource}/${CMSConfig.ProjectID}/items?system.type=album`)
        return data.items.map((item) => {
          return `album/${item.system.codename}` ; 
        })
    },
  
    dir: 'dist'   
  },
  
  router: {
    base: process.env.DEPLOY_ENV === 'STATIC' ? '/photography-portfolio-website/' : '/'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=PT+Sans&display=swap' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#134576' },
  /*
  ** Global CSS
  */
  css: [
    '~assets/stylesheets/css-base/base.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/masterResolver.js',
    '~/plugins/globalComponents.js',
    '~/plugins/helperFunctions.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'kenticocloud-nuxt-module',
     '@nuxtjs/style-resources' 
  ],
  kenticocloud: {
    projectId: CMSConfig.ProjectID,
    enableAdvancedLogging: false,
    previewApiKey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx'
  },
  styleResources: {
    scss: ['assets/stylesheets/main.scss']
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
