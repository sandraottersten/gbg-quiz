<template>
  <div>
      
            <div id ="nav2">
      
          <router-link to="/"><button class="navbutton" type="button">Home</button></router-link>

      <router-link to="/sign-up"><button class="navbutton" v-if="!user" type="button">Signup</button></router-link>
      <router-link to="/login"><button class="navbutton" v-if="!user" type="button">Login</button></router-link>
      <p><a v-if="user" @click="logout">Logout</a></p>
    
    
</div> 
      
      <div id ="content">

      
    <h2 v-show="winner">You won! <br>
    <img width="200px" v-for="img in images" v-bind:key="img"><br>
</h2>
    <h2 v-show="!winner">You lost! <br>
        <img width="200px" v-for="img in images2" v-bind:key="img"><br>
    </h2>
    <p>Correct answer is: {{this.questions[this.number].answer}}</p>
    <p>Number of guesses: {{this.$store.state.numOfGuesses}}</p>



    <router-link to="/settings"><button class="gamebutton">Play again</button></router-link>
    <button class="gamebutton" @click="logout">Logout</button>
  </div>
    </div>
</template>

<script>
import firebase from "firebase";
import {db} from '../firebase-config'

export default {

data() {
    return {
        images: ['http://i67.tinypic.com/155mdzn.png'],
        images2: ['http://i64.tinypic.com/i3uf0z.png']
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
