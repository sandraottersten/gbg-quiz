<template>
  <div>
    <p>Pick a category</p>
    <div>
      <button class="gamebutton" @click="afunction('trams')">Trams</button>
      <button class="gamebutton" @click="afunction('history')">History</button>
      <button class="gamebutton" @click="afunction('food')">Food</button>
      <button class="gamebutton" @click="afunction()">All</button>
    </div>
    <router-link to="/playgame"><button @click="randNum">Start Game</button></router-link>
    <button class="gamebutton" @click="logout">Logout</button>
  </div>
</template>

<script>
import firebase from "firebase";
import {db} from '../firebase-config'


export default {
  name: "GameMenu",
  firebase: {
    questions: db.ref('questions')
  },
  components: {},
  methods: {
    randNum: function(){
      this.$store.state.number = Math.floor(Math.random() * this.questions.length);
      this.$store.state.numOfGuesses = 0
    },
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
