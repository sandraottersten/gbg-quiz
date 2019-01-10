
import Vue from 'vue';
import Vuex from 'vuex';



Vue.use(Vuex)

export default new Vuex.Store({
  
  state: {
      number: 0,
      value: 0,
      bot: 0,
      numOfGuesses: 0,
      winner: true,
      theQuestion: '',
      theAnswer: 0,
      arr: [],
      num: 0,
      choosenBot: "",
      maxGuess: 0,
      minGuess: 0,
      botWins: false,
      timerIsOut: false,
      sessionScore: 0,
  },  
  getters: {
    value: state => {
      return state.value;
    }
  },
  mutations: {
    newValue: (state, payload) => {
      state.value = payload;
    },
    updateMax: (state, amount) => {
      state.maxGuess = amount
    },
    updateMin: (state, amount) => {
    state.minGuess = amount
  },
    updateSessionScore: (state, amount) => {
    state.sessionScore += amount
  }
  },
  
  actions: {
    newValue: ({commit}, payload) => {
      commit('newValue', payload)
    }
  }
})