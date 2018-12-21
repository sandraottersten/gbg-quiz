<template>
  <div id="app">
    <h3>Question</h3>
    <h1>{{questions[number].question}}</h1>
    <input ref="my_input" @input="newValue" type="number" onfocus="this.value=''" v-on:keypress = "OnlyNumbers"/>       
    <button @click="makeGuess">Make a guess</button>
    <span id="errormess" style="color: orangered; display: none"><br><br>* Only numbers! </span>
    <p id="guess" style="display: none"><br>Guess a {{highLow}} number!</p>
    <Timer v-show="show" ref="form"/>
    <p>My guess: {{userGuess}}</p>
    <p>Bot guess: {{bot}}</p>
  </div>
</template>

<script>

import Timer from '@/components/Timer.vue'
import {db} from '../firebase-config'

export default {
  name: 'PlayGame',
  data: function () {
    return {
      numberKeys: [],
      show: true,
      botGuesses: [],
      highLow: '',
      userGuess: 0,
      maxGuess: 0,
      minGuess: 0
    }
  },
  firebase: {
  questions: db.ref('questions')
  },

  components: {
    Timer
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
      }
    },

  methods: {
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
      randNum: function(){
        this.num = Math.floor(Math.this.questions.length);
      },
      ranNumBot(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
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
          this.easyBot(1,26);
        if(this.value < this.questions[this.number].answer){
          this.stop();
          alert("högre");
          this.ranNumBot();
          this.reset();
          this.start();
          this.highLow = 'higher';
          document.getElementById("guess").style.display = "inline";

        }
        else if (this.value > this.questions[this.number].answer){
          this.stop();
          alert("lägre");
          this.ranNumBot();
          this.reset();
          this.start();
          this.highLow = 'lower';
          document.getElementById("guess").style.display = "inline";
        }
        else {
          this.show = false;
          this.stop();
          this.$router.push({ path: 'winner' });
          alert("Player1 wins this round!");
        }
      },
        getFormValues() {
          this.userGuess = this.$refs.my_input.value;
      },
      easyBot(minGuess, maxGuess) {
        if (this.bot < this.questions[this.number].answer) {
          // this.maxGuess--;
          this.ranNumBot(minGuess, maxGuess);
          // console.log(this.maxGuess + " max Guess");
          // console.log(this.bot + " Guess higher");
      }
        else if (this.bot > this.questions[this.number].answer) {
          // this.maxGuess--;
          this.ranNumBot(minGuess, maxGuess);
          
          // console.log(this.minGuess + " min Guess");
          // console.log(this.bot + " Guess lower");
      } 
        else {
          alert("Bot wins this round!");
          console.log(this.bot + " Correct guess, good bot!")
              }
          console.log(this.bot + " Current guess");
      },
      OnlyNumbers(e) {
        var keyCode = e.which;
        var ret = ((keyCode >= 48 && keyCode <= 57) || this.numberKeys.indexOf(keyCode) != -1);
        document.getElementById("errormess").style.display = ret ? "none" : "inline";
        return ret;
      }
    }
};

</script>
