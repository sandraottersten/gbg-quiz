<template>
  <Category />
</template>

<script>
import Category from '@/components/Category.vue'
import {db} from '../firebase-config'

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
