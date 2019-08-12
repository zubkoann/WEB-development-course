import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// ранее данные в локальный обьект дата компонены если нужно было эти данные передать в дочернюю документу то применяли пропс либо через парент 
// для изменения глобальных данных, либо через рут что не правильно
// глобальное хранилище 
// хотим хранить шутки которые доступны во всех компонентах
export default new Vuex.Store({
  // хранит состояния нашего стора по сути данные
  state: {
    // создаем свойство которое хранит массив шуток
    // {{ $store.state}} так обращаемся в любой компоненте
    jokes: [],

  },
  // хранит методы которые могут менять данные в сторе, мы не можем мутировать стор напрямую
// для того чтобы использовать реактивные изменение и чтоб о них узнали все компоненты]
  mutations: {
    // state принимает всегда первым параметром
    initJokes(state, payload){
      // чтобы не было массива в массиве пушим с помощью спред
      state.jokes.push(...payload)
    },
    addJoke(state, payload){
      state.jokes.push(payload)
    },
    removeJoke(state, index){
      state.jokes.splice(index, 1)
    }
  },
  // тоже методы, умеют выполнять запросы действия и вызывают мутации. 
  // Мутации можно вызвать как из кода так и из экшн
  actions: {
    // экшн назовем так же как и мутацию чтоб не перепутать,  хотим использовать комит поэтому его передаем в параметры
    initJokes({commit}){
      fetch('https://official-joke-api.appspot.com/random_ten', {
        method: 'GET'
      })
          .then(response => response.json())
          .then(json => commit('initJokes', json))
    },
    addJoke({commit}){
      fetch('https://official-joke-api.appspot.com/random_joke', {
        method: 'GET'
      })
          .then(response => response.json())
          .then(json => commit('addJoke', json))
    },
    removeJoke({commit}, index){
      commit('removeJoke', index)
    }
  }
})
