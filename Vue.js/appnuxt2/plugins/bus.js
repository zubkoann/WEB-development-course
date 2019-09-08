import Vue from 'vue'

const eventBus = {}

// если мы хотим чтобы было что-то доступно  глобально
// новый вью инстанс на котором будут имититься события
// будем обращаться как this.$bus 
eventBus.install = function (Vue) {
  Vue.prototype.$bus = new Vue()

}
