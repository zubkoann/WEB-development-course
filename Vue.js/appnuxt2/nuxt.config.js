export default {
  // отвечает за приложение spa или universal
  mode: 'universal',
  /*
   ** Headers of the page
   */
  //meta применяется только в universal режиме
  head: {
    title: process.env.npm_package_name || '',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    // можно подключить линки гуглфонтс и тд
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  /*
   ** Customize the progress-bar color
  // автоматический прогрес бар
   */
  loading: {
    color: 'red'
  },
  // можно прелоадер создать отдельным компонентом
  // ~ или @ ссылка на папку где лежат исходники
  // loading: '~/components/ui/loader.vue',
  /*
   ** Global CSS
    нужно обязательно поставить npm i sass-loader  node-sass --save-dev
   */
  css: [
    '~/assets/scss/style.scss'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  // подключаем созданные нами плагины
  plugins: [
    '@/plugins/core-components',
    '@/plugins/bus',
    '@/plugins/axios',
    // ssr: false означает что на стороне сервиса этот плагин подключаться не будет
    // {src: '@/plugins/core-components', ssr: false}
    // либо так через mode
    // {src: '@/plugins/core-components', mode: 'client'},
    // {src: '@/plugins/core-components', mode: 'server'}
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  // если axios в модулях его не обязательно импортировать
  // он доступен из контекста приложения глобально
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    // если есть свой сервер в обращении к API не нужно писать полный путь url 
    baseUrl: 'http://localhost/api/v1'
  },
  /*
   ** Build configuration
  если хотим изменить конфигурацию вебпак (отключить чанки)
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {

    }
  },
  // можем вписывать роутеры которые доп к роута которые в пейдже
  // включаем middleware
  // глобально описали для всех страниц
  router: {
    middleware: 'auth'
  },
  // можно добавлять настройки которые в момент пререндеринга
  // для динамических роутов лучше использовать ssr
  generate: {
    // перемещает папку dist
    // dir: '../dir/..',
    // пожно записать все id  товаров
    // routes: function () {
    //   return [
    //   ]
    // }
  }
}
