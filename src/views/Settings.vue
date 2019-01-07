<template>
  <div>
    <p>Pick a category</p>
    <div>
      <button class="gamebutton" @click="afunction('trams')">Trams</button>
      <button class="gamebutton" @click="afunction('history')">History</button>
      <button class="gamebutton" @click="afunction('food')">Food</button>
      <button class="gamebutton" @click="afunction()">All</button>
    </div><br>
    <router-link to="/playgame"><button class="gamebutton" @click="randNum">START GAME</button></router-link>
    <button class="gamebutton" @click="logout">Logout</button>
  <Category />
  </div>
</template>

<script>

  import Category from '@/components/Category.vue'

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
  components: {},
  methods: {
    randNum: function(){
      this.$store.state.number = Math.floor(Math.random() * this.questions.length);
      this.$store.state.numOfGuesses = 0
    },
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("login");
        });
    }
    },

    components: {
      Category
    },

  };
</script>
