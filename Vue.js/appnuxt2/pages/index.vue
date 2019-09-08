<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">appnuxt</h1>
      <h2 class="subtitle">My premium Nuxt.js project</h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>

        <nuxt-link to="/about" class="button--green">About</nuxt-link>
        <nuxt-link to="/users" class="button--green">users</nuxt-link>
        <nuxt-link to="/cabinet" class="button--green">cabinet</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
//  <nuxt-link /> такой же для роутинга
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data() {
    return {
      defProp: 'def value'
    }
  },
  // включаем middleware
  // локально для конкретной страницы
  // middleware: 'auth',
  // не отрабатывает на стороне сервера
  mounted() {},
  // похож на mounted при обращении роутера но на стороне как сервера так и клиента в отличии от
  // mounted . Можем принять  context либо свойства context
  // можно промисами а можно  async
  // this.$axios доступен везде кроме тех компонетов которые обрабатывают серверную часть
  // asyncData  все что ретернет пересетает в локальную data
  // также есть метод fetch который позволяет сетить эти данные в стор
  async asyncData({ req, res, app, error }) {
    // так как axios описан в модулях
    // контекст приложения находиться в переменной app
    // захватываем свойство data из респонса который к нам вернется
    let { data } = await app.$axios.get(
      'https://www.googleapis.com/books/v1/volumes?q=php'
    )
    // console.log('datainfo', data)
    // console.log('app', app)
    //засетится свойство booksss которое будет хранить данные
    return { booksss: data }
    // в случае ошибки используется такой обьект встроен в  nuxt
    // error({ statusCode: 404, message: 'shit' })
  },
  // используем fetch чтобы засетить в store
  // app можно назвать любым именем это контекст
  fetch({ store, params, app }) {
    return app.$axios
      .get('https://www.googleapis.com/books/v1/volumes?q=php')
      .then(res => {
        // console.log('books', res.data)
        // можем вызвать мутацию чтобы записать в store
        store.commit('books/setBooks', res.data)
      })
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
