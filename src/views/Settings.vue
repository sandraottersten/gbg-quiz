<template>
  <div>
    <div id ="content">
      <h3>Pick a category {{theQuestion}}</h3>
      <div>
      <button class="categorybutton" @click="afunction('trams')"><img src="http://i68.tinypic.com/24lucys.jpg"></button>
      <button class="categorybutton" @click="afunction('history')"><img src="http://i63.tinypic.com/amp2rb.jpg"></button>
      <button class="categorybutton" @click="afunction('food')"><img src="http://i67.tinypic.com/149mps1.jpg"></button>

      <br><br>


  <h3> Choose your opponent </h3>
      <button class="categorybutton" @click="afunction('easy')"><img src="http://i63.tinypic.com/10hj5fk.jpg"></button>
      <button class="categorybutton" @click="afunction('medium')"><img src="http://i68.tinypic.com/2dkn52x.jpg"></button>
      <button class="categorybutton" @click="afunction('hard')"><img src="http://i64.tinypic.com/14jcaas.jpg"></button>





    </div>






    <br>
    <router-link to="/playgame"><button class="gamebutton">Start Game</button></router-link>
    </div>
  </div>
</template>

<script>
import {db} from '../firebase-config'

export default {
  name: "Settings",
  data() {
      return {
        theQuestion: '',
        theAnswer: ''
      }
  },
  firebase: {
    questions: db.ref('questions')
  },
  methods: {
    afunction: function(cat) {
      var arr = [];
      for(var i = 0; i < this.questions.length; i++){
        if (this.questions[i].category === cat) {
          arr.push(this.questions[i]);
        }
      }
      var num = Math.floor(Math.random() * arr.length);
      this.$store.state.theQuestion = arr[num].question;
      this.$store.state.theAnswer = arr[num].answer;
      this.$store.state.numOfGuesses = 0
    }
  }
};
</script>
