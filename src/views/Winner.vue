<template>
  <div>
    <p>You won!</p>
    <router-link to="/settings"><button>Play again</button></router-link>
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
