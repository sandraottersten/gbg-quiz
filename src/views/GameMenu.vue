<template>
  <div>
    <router-link to="/highscore"><button class="gamebutton">High score</button></router-link>
    <router-link to="/rules"><button class="gamebutton">How to play</button></router-link>
    <router-link to="/settings"><button class="gamebutton">Start Game</button></router-link>
    <p>
      <router-link to="/login">Login</router-link> to save your results and put your name on the high score list.
    </p>
    <p>
      No account yet? Create one <router-link to="/sign-up">here</router-link>
    </p>
    <button @click="logout">Logout</button>
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
