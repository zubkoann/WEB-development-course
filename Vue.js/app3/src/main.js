import Vue from 'vue'
// подключаем библиотеку 
import VueRouter from 'vue-router'
// использовать библиотеку
Vue.use(VueRouter);

import './assets/scss/style.scss'
import App from './App.vue'
import About from './components/About'
import Data from './components/Data'

Vue.config.productionTip = false

const routes = [
  { path: '/about', component: About },
  { path: '/data/:type', component: Data }
];

// создаем инстанс для роутера передаем обьект с роутерами
const router = new VueRouter({
  routes,
  mode: 'history'
});
// говорим что хотим использовать режим нормальных ссылок а не через хеш

new Vue({
  render: h => h(App),
  router,
  // router: router,
}).$mount('#app')
