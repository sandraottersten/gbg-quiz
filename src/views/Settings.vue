<template>
  <div>
      
            <div id ="nav2">
      
          <router-link to="/"><button class="navbutton" type="button">Home</button></router-link>

      <router-link to="/sign-up"><button class="navbutton" v-if="!user" type="button">Signup</button></router-link>
      <router-link to="/login"><button class="navbutton" v-if="!user" type="button">Login</button></router-link>
      <p><a v-if="user" @click="logout">Logout</a></p>
    
    
</div> 
      
    <div id ="content">
  
      
    <h3>Pick a category</h3>
    <div>
      <button class="gamebutton" @click="afunction('trams')">Trams</button>
      <button class="gamebutton" @click="afunction('history')">History</button>
      <button class="gamebutton" @click="afunction('food')">Food</button>
      <button class="gamebutton" @click="afunction()">All</button>
    </div><br>
    <router-link to="/playgame"><button class="startgamebuttonsmall" @click="randNum">START GAME</button></router-link>
  </div>
        <Category />

    </div>
</template>

<script>
import Category from '@/components/Category.vue'
import {db} from '../firebase-config'

export default {
  name: "GameMenu",
  data() {
      return {
        theQuestion: ''
      }
  },
  firebase: {
    questions: db.ref('questions')
  },
  methods: {
    randNum: function(){
      this.$store.state.number = Math.floor(Math.random() * this.questions.length);
      this.$store.state.numOfGuesses = 0
    }
  },
  components: {
      Category
    },

  };
</script>
