import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    questions: [
          {
            id: 1,
            question: "Guess the price of the cinnamon bun",
            answer: 25
         },
          {
            id: 2,
            question: "Guess the price of the cookie",
            answer: 10
          },
          {
            id: 3,
            question: "Guess the price of the coffee",
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
