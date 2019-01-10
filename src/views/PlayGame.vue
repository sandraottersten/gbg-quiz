<template>  
  <div id ="content">  
    <h3>Question</h3>
    <h1>{{theQuestion}}</h1>
    <input id="guess" @input="newValue" type="number" autofocus="this.value=''" v-on:keypress.enter = "makeGuess"/>
    <button class="guessbutton" @click="makeGuess">Make a guess</button>
    <p id="errormess" style="color: orangered; display: none">Only numbers! </p>
    <p id="playerTurn" v-show="playersTurn">It's the player's turn! </p>
    <p id="botTurn" v-show="!playersTurn">It's the bot's turn! </p>
    <flash-message class="myCustomClass"></flash-message>
    <Timer v-show="show" ref="form"/>
    <p>My guess: {{value}} </p>
    <p>Bot guess: {{bot}} </p>
  </div>
</template>

<script>
import Timer from '@/components/Timer.vue'
import {db, fb} from '../firebase-config'
import Vue from 'vue';
import VueFlashMessage from 'vue-flash-message';
import { timeout } from 'q';
import { functions } from 'firebase';
Vue.use(VueFlashMessage);
require('vue-flash-message/dist/vue-flash-message.min.css');


export default {
  name: "PlayGame",
  data: function() {
    return {
      numberKeys: [],
      show: true,
      botGuesses: [],
      highLow: '',
      userGuess: 0,
      maxGuess: 0,
      minGuess: 0,
      show: true,
      playersTurn: true
    }
  },
  firebase: {
  questions: db.ref('questions'),
  allUsers: db.ref('allUsers').orderByChild("newPoint")
  },
  components: {
    Timer,
  },
  computed: {
    value() {
      return this.$store.getters.value;
    },
    number() {
      return this.$store.state.number;
    },
    bot() {
      return this.$store.state.bot;
    },
    uid() {
    return fb.auth().currentUser.uid;
    },
    user() {
      return fb.auth().currentUser;
    },
    oldScore() {
    return this.allUsers[this.uid].newPoint
    },
    theQuestion () {
      return this.$store.state.theQuestion;
    },
    theAnswer() {
      return this.$store.state.theAnswer;
    },
    num() {
      this.$store.state.num;
    },
    arr() {
      this.$store.state.arr;
    }
  },
  created () {
    this.$bindAsObject('allUsers', db.ref('allUsers/'))
  },
  methods: {
    storeData() {
      this.$firebaseRefs.allUsers.child(this.uid).update({
      newPoint: parseInt(this.oldScore) + parseInt(10)});
    },
    stop() {
      this.$refs.form.stop()
    },
    start() {
      this.$refs.form.start()
    },
    reset() {
      this.$refs.form.reset()
    },
    newValue(event) {
      this.$store.dispatch('newValue', event.target.value)
    },
    ranNumBot(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
       this.disableInput();
        var rng = Math.floor(Math.random() * (max - min)) + min;
        if (this.botGuesses.includes(rng) !== true) {
                this.botGuesses.push(rng);
                this.$store.state.bot = rng;
                console.log(rng + " pushed in");
            } else {
              console.log(rng + " already inside");
              console.log(this.botGuesses);
              this.ranNumBot(min, max);
            }
    },
    makeGuess(value, number, bot) {
      this.ranNumBot(1,1000);
      this.stopDisable();
      var input = document.getElementById("guess");
      if(this.value < this.$store.state.theAnswer){
        this.$store.state.numOfGuesses++;
        this.playersTurn = false;
        this.stop();
        this.reset();
        this.flash('Higher', 'error', {
          timeout: 2000,
          important: true
        });
        input.value = "";
      }
      else if (this.value > this.$store.state.theAnswer){
        this.$store.state.numOfGuesses++;
        this.playersTurn = false;
        this.stop();
        this.reset();
        this.start();
        this.flash('Lower', 'error', {
          timeout: 2000,
          important: true
        });
        input.value = "";
      }
      else if (this.value == this.$store.state.theAnswer && this.user){
        this.$store.state.numOfGuesses++;
        this.playersTurn = false;
        //when bot wins
        //this.$store.state.winner = false
        this.show = false;
        this.stop();
        this.storeData();
        this.$router.push({ path: 'winner' });
      }
      else {
        this.$store.state.numOfGuesses++;
        //when bot wins
        //this.$store.state.winner = false
        this.show = false;
        this.stop();
        this.$router.push({ path: 'winner' });
      }
    },
    OnlyNumbers(e) {
      var keyCode = e.which;
      var ret = ((keyCode >= 48 && keyCode <= 57) || this.numberKeys.indexOf(keyCode) != -1);
      document.getElementById("errormess").style.display = ret ? "none" : "inline";
      return ret;
    },
     disableInput() {
        setTimeout(() => {
        document.getElementById("guess").disabled = true;
        }, 0);
     }, 
     stopDisable() {
       setTimeout(() => {
         document.getElementById("guess").disabled = false;
           this.playersTurn = true;
          this.reset();
          this.start();
       }, 2500);
     }
    }
  };
</script>


