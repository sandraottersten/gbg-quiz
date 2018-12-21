<template>
  <div>
    <p>Pick a category</p>
    <div>
      <button @click="afunction('trams')">Trams</button>
      <button @click="afunction('history')">History</button>
      <button @click="afunction('food')">Food</button>
      <button @click="afunction()">All</button>
    </div>
    <router-link to="/playgame"><button @click="randNum">Start Game</button></router-link>
    <button @click="logout">Logout</button>
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
