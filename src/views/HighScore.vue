<template>

<div id="highscorecontent">

  <div id="highscore">
    <h2>High score list</h2>
    <router-link to="/gamemenu"><button class="gamebutton">Back</button></router-link>
    <button class="gamebutton" @click="logout">Logout</button>



    </div>

          <img width="200px" v-for="img in images" v-bind:src="img">

  </div>




</template>

<script>
import firebase from "firebase";




export default {

data() {
    return {
        images: ['http://i66.tinypic.com/fy0869.png']
    }

},

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
