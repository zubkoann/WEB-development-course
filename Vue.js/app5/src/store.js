import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// добавляем пользователя user
export default new Vuex.Store({
  state: {
    user: {},
    events: []

  },
  mutations: {
    // получает state и user_payload в  state.user сохраняет user_payload
    signIn(state, user_payload) {
      state.user = user_payload
    },
    //просто очищаем user
    signOut(state) {
      state.user = {}
    },
    // сохраняем то что пришло
    setEvents(state, events_payload) {
      state.events = events_payload
    }

  },
  actions: {
    signIn({
      commit
    }, user_payload) {
      commit('signIn', user_payload)
    },

    signOut({
      commit
    }) {
      commit('signOut')
    },

    setEvents({
      commit
    }, events_payload) {
      commit('setEvents', events_payload)
    }

  }
})