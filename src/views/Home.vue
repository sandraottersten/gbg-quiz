<template>
  <div>
    <div>
    <h1>Game rules</h1>
    <p>Try to guess the correct number. You and your opponents will take turns to answer.
    After every answer you will be given an indication if the correct number is higher or
    lower than the last guess. When the correct answer is given, the game is over.
    Good luck!</p>
    </div>
    <router-link to="/playgame"><button @click="randNum">Start Game</button></router-link>
  </div>
</template>

<script>
import {db} from '../firebase'

export default {
  name: 'home',
    firebase: {
      questions: db.ref('questions')
    },

  methods: {
    randNum: function(){
      this.$store.state.number = Math.floor(Math.random() * this.questions.length);
    }
  }
}
</script>
