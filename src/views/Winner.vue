<template>
  <div>
    <div id ="content">
          <Timer v-show="show" ref="form"/>
      <h2 v-show="winner">You won!
      <br>
      <img width="200px" v-for="img in images" v-bind:src="img">
      <br>
      </h2>
      <h2 v-show="!winner">You lost!
      <br>
      <img width="200px" v-for="img in images2" v-bind:src="img">
      <br>
      </h2>
      <p v-show="botWins">{{choosenBot}} gave the correct answer.</p>
      <p v-show="timerIsOut">The timer ran out!</p>
      <p>Your score: {{this.sessionScore}}</p>
      <p>Correct answer is: {{this.$store.state.theAnswer}}</p>
      <p>Number of guesses: {{this.$store.state.numOfGuesses}}</p>
      <router-link to="/settings"><button class="gamebutton">Play again</button></router-link>
      <router-link to="/highscore"><button class="gamebutton">High Score</button></router-link>
    </div>
  </div>
</template>

<script>
import {db, fb} from '../firebase-config';
import Timer from '@/components/Timer.vue';


export default {
  name: "Winner",
  data() {
    return {
        show: false,
        images: ['http://i66.tinypic.com/xauiyp.gif'],
        images2: ['http://i67.tinypic.com/ei0c9u.gif']
    }
  },
  firebase: {
    questions: db.ref('questions')
  },
  components: {
    Timer,
  },
  computed: {
    number() {
      return this.$store.state.number;
    },
    winner() {
      return this.$store.state.winner;
    },
    botWins() {
      return this.$store.state.botWins;
    },
    timerIsOut() {
      return this.$store.state.timerIsOut;
    },
     sessionScore() {
       return this.$store.state.sessionScore;
    },
    totalScore() {
      return this.$store.state.totalScore;
    choosenBot() {
      return this.$store.state.choosenBot;
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
    },
    stop() {
      this.$refs.form.stop();
    }
  },
  mounted(){
    this.stop();
  }

};
</script>
