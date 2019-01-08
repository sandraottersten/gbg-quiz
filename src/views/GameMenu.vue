<template>
  <div>     
    <div id ="content">
      <router-link to="/highscore"><button class="gamebutton">High score</button></router-link>
      <router-link to="/rules"><button class="gamebutton">How to play</button></router-link>
      <router-link to="/settings"><button class="gamebutton">Start Game</button></router-link>
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
