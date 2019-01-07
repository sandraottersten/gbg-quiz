<template>
  <div>
      
      <div id ="nav2">
      
          <router-link to="/"><button class="navbutton" type="button">Home</button></router-link>

      <router-link to="/sign-up"><button class="navbutton" v-if="!user" type="button">Signup</button></router-link>
      <router-link to="/login"><button class="navbutton" v-if="!user" type="button">Login</button></router-link>
      <p><a v-if="user" @click="logout">Logout</a></p>
    
    
</div>          

      
<div id ="content">
      
      
      
    <router-link to="/highscore"><button class="gamebutton">High score</button></router-link>
    <router-link to="/rules"><button class="gamebutton">How to play</button></router-link>
    <router-link to="/settings"><button class="gamebutton">Start Game</button></router-link>
    <p>
      <router-link to="/login">Login</router-link> to save your results and put your name on the high score list.
    </p>
    <p>
      No account yet? Create one <router-link to="/sign-up">here</router-link>
    </p>
    <button class="gamebutton" @click="logout">Logout</button>
    
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "GameMenu",
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
