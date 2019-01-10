<template>
  <div>     
    <div id ="content">
      <router-link to="/highscore"><img  class="gamemenu" src="http://i63.tinypic.com/2yugfpl.jpg"></router-link>
      <router-link to="/rules"><img class="gamemenu" src="http://i63.tinypic.com/11kk2ft.jpg"></router-link>
      <router-link to="/settings"><img class="gamemenu" src="http://i68.tinypic.com/ifzmab.jpg"></router-link>
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
