<template>
  <div>
    <div id ="content">
      <h3>Pick a category {{theQuestion}}</h3>
      <div>
      <button class="categorybutton" @click="afunction('trams'), categoryButton = 1, checkSelect()" ><img v-bind:style="{'outline':buttonSelector[1].categorySelected}" src="../assets/Trams.jpg"></button>
      <button class="categorybutton" @click="afunction('history'), categoryButton = 2, checkSelect()" ><img v-bind:style="{'outline':buttonSelector[2].categorySelected}" src="../assets/History.jpg"></button>
      <button class="categorybutton" @click="afunction('food'), categoryButton = 3, checkSelect()" ><img v-bind:style="{'outline':buttonSelector[3].categorySelected}" src="../assets/Food.jpg"></button>
      </div>
      <h3> Choose your opponent </h3>
      <div>
      <button class="categorybutton" @click="activeButton = 4, selectedBot('easy'), checkSelect()"><img v-bind:style="{'outline':buttonSelector[4].opponentSelected}" src="../assets/Glenn.jpg"></button>
      <button class="categorybutton" @click="activeButton = 5,  selectedBot('medium'), checkSelect()"><img  v-bind:style="{'outline':buttonSelector[5].opponentSelected}" src="../assets/Hakan.jpg"></button>
      <button class="categorybutton" @click="activeButton = 6,  selectedBot('hard'), checkSelect()" ><img v-bind:style="{'outline':buttonSelector[6].opponentSelected}" src="../assets/Miriam.jpg"></button>
      </div>
      <router-link to="/playgame"><button  v-visible="optionsSelected" class="gamebutton">Start Game</button></router-link>
    </div>
  </div>
</template>

<script>
import {db} from '../firebase-config'
import { functions } from 'firebase';

export default {
  name: "Settings",
  data() {
      return {
        choosenBot: 0,
        theQuestion: '',
        theAnswer: '',
        activeButton: 0,
        categoryButton: 0,
        choosenBot: 0,
        optionsSelected: false,
        maxGuess: 0,
        minGuess: 0

      }
  },
  computed: {
      buttonSelector: function() {
      let result = [];
      for (var i = 0; i< 7; i++){
        if (this.activeButton == i){
          result.push({
            opponentSelected: '2px deepskyblue solid'

            });
        } else if ( this.categoryButton == i){
          result.push({
            categorySelected: '2px deepskyblue solid'
            });
        } else {
          result.push({
            opponentSelected: 'none',
            categorySelected: 'none'
          });
        }
      }
      return result;
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
      this.$store.state.numOfGuesses = 0;
      this.$store.state.value = 0;
      this.$store.state.bot = 0;
    },
    selectedBot: function(oppo) {

      if (oppo === 'easy') {
        this.$store.state.choosenBot = "Glenn";
      } else if (oppo === 'medium') {
        this.$store.state.choosenBot = "Håkan";
      }else {
        this.$store.state.choosenBot = "Miriam";
    }
    },
    checkSelect() {
      if (this.categoryButton && this.activeButton > 0) {
      this.optionsSelected = true;
    }
    }
  },

};
</script>
