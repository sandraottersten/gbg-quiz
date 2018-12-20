<template>
  <div id="highscore">
    <p>This is just to see if it works!</p>
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
