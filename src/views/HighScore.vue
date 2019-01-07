<template>
  <div> 
    <div id ="content">
      <div id="highscorecontent">
        <div id="highscore">
        <h2>High score list</h2>
        <List/>
        <HighscoreList />
        </div>    
      <img width="200px" v-for="img in images" v-bind:key="img"> 
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import List from "@/components/List";
import HighscoreList from "@/components/HighscoreList"

export default {
  name: "highscore",
  components: {
    HighscoreList,
    List
  },
  data() {
    return {
        images: ['http://i66.tinypic.com/fy0869.png']
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
