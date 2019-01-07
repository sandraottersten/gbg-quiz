<template>
  <div>

    <h2 v-show="winner">You won! <br>
    <img width="300px" v-for="img in images" v-bind:src="img"><br>
</h2>
    <h2 v-show="!winner">You lost!</h2>
    <p>Correct answer is: {{this.questions[this.number].answer}}</p>
    <p>Number of guesses: {{this.$store.state.numOfGuesses}}</p>



    <router-link to="/settings"><button class="gamebutton">Play again</button></router-link>
    <button class="gamebutton" @click="logout">Logout</button>
  </div>
</template>

<script>
import firebase from "firebase";
import {db} from '../firebase-config'

export default {

data() {
    return {
        images: ['http://i67.tinypic.com/155mdzn.png']
    }

},
  name: "Winner",

  firebase: {
    questions: db.ref('questions')
  },
  data() {
      return {
          images: ['http://i67.tinypic.com/155mdzn.png']
      }
  },
  computed: {
    number() {
      return this.$store.state.number;
    },
    winner() {
      return this.$store.state.winner;
    }
  },

  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("login");
        });
    }
  }
};
</script>
