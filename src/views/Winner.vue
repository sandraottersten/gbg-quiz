<template>
  <div>
    <h2 v-show="winner">You won!</h2>
    <h2 v-show="!winner">You lost!</h2>
    <p>Correct answer is: {{this.questions[this.number].answer}}</p>
    <p>Number of guesses: {{this.$store.state.numOfGuesses}}</p>
    <router-link to="/settings"><button>Play again</button></router-link>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import firebase from "firebase"
import {db} from '../firebase-config'


export default {
  name: "Winner",
  firebase: {
    questions: db.ref('questions')
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
