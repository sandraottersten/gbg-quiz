import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    questions: [
          {
            id: 1,
            question: "Gissa priset på bullen",
            answer: 25
         },
          {
            id: 2,
            question: "Gissa priset på kakan",
            answer: 10
          },
          {
            id: 3,
            question: "Gissa priset på kaffet",
            answer: 32
          }
      ],
      number: 0,
      value: 0,
      bot: 0

  },
  getters: {
    value: state => {
      return state.value;
    }

  },
  mutations: {
    newValue: (state, payload) => {
      state.value = payload;
    }
  },
  actions: {
    newValue: ({commit}, payload) => {
      commit('newValue', payload)
    }
  }
})
