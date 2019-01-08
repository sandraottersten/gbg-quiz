<template>
  <div>
    <div id ="content">
      <h3>Pick a category {{theQuestion}}</h3>
      <div>
      <button class="gamebutton" @click="afunction('trams')">Trams</button>
      <button class="gamebutton" @click="afunction('history')">History</button>
      <button class="gamebutton" @click="afunction('food')">Food</button>
    </div>
    <br>
    <router-link to="/playgame"><button class="gamebutton">Start Game</button></router-link>
    </div>
  </div>
</template>

<script>
import {db} from '../firebase-config'

export default {
  name: "Settings",
  data() {
      return {
        theQuestion: '',
        theAnswer: ''
      }
  },
  firebase: {
    questions: db.ref('questions')
  },
  methods: {
    afunction: function(cat) {
      var arr = [];
      for(var i = 0; i < this.questions.length; i++){
        if (this.questions[i].category === cat) {
          arr.push(this.questions[i]);
        }
      }
      var num = Math.floor(Math.random() * arr.length);
      this.$store.state.theQuestion = arr[num].question;
      this.$store.state.theAnswer = arr[num].answer;
      this.$store.state.numOfGuesses = 0
    }
  }
};
</script>
