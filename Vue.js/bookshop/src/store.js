import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    books: '',
  },
  mutations: {
    searchBooks(state, payload){
      state.books='';
      state.books=payload;
    },
  },
  actions: {
    searchBooks({commit}, searchText){
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchText}`, {
        method: 'GET'
      })
          .then(response => response.json())
          .then(json => commit('searchBooks', json))
    },

  }
})
