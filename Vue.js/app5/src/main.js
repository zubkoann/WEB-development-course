import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/scss/style.scss'

// импортирует firebaseApp в {} так как был экспортирован как export const firebaseApp
import {
  firebaseApp
} from "./firebase";

Vue.config.productionTip = false

// метод который помогает управлять авторизацией. Используем Хук onAuthStateChanged (вотчер)
// надо чтоб пользователь попал либо на одну либо на др страницу 
// router.push и  router.replace методы роутера котрые бросает на  определ стр
firebaseApp.auth().onAuthStateChanged(user => {
  // можем имитить стор , вызываем экшн signIn которому передаем user
  store.dispatch('signIn', user);
  if (user) {
    router.push('/dashboard')
  } else {
    router.replace('signin')
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')