import Vue from 'vue'
import App from './App.vue' // компонента которая будет являться родительской для всех остальных
// подключаем scss
import './assets/scss/style.scss'

Vue.config.productionTip = false; // не прод

new Vue({ // создаем рутовый вью инстанс
  render: h => h(App), 
}).$mount('#app')  // все равно чтобы создали в обьекте el: '#app'
