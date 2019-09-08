import Vue from 'vue'
// создаем плагин и импортируем миксин
import pageMixin from '@/mixins/page'
// в плагине глобально подключаем миксин
Vue.mixin(pageMixin)
// можем подключить компоненту
// Vue.component('ComponenetName', {});
