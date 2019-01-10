<template>
  <div> 
    <div id ="content">  
      <h2 v-show="winner">You won! 
      <br>
      <img width="200px" v-for="img in images" v-bind:key="img">
      <br>
      </h2>
      <h2 v-show="!winner">You lost! 
      <br>
      <img width="200px" v-for="img in images2" v-bind:key="img"><br>
      </h2>
      <p>Correct answer is: {{this.$store.state.theAnswer}}</p>
      <p>Number of guesses: {{this.$store.state.numOfGuesses}}</p>
      <router-link to="/settings"><button class="gamebutton">Play again</button></router-link>
      <router-link to="/highscore"><button class="gamebutton">High Score</button></router-link>
    </div>
  </div>
</template>

<script>
import {db, fb} from '../firebase-config'

export default {
  name: "Winner",
  components: {},
  data() {
    return {
        images: ['http://i66.tinypic.com/xauiyp.gif'],
        images2: ['http://i67.tinypic.com/ei0c9u.gif']
    }
  }, 
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
