<template>
  <div id="highscore">
    <p>High score list</p>
    <router-link to="/gamemenu"><button>Back</button></router-link>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import firebase from "firebase";


export default {
  name: "highscore",
  components: {},
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
