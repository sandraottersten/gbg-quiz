<template>
  <div id="app">
    <h3>Question</h3>
    <h1>{{questions[number].question}}</h1>
    <input ref="my_input" @input="newValue" type="number" onfocus="this.value=''" v-on:keypress = "OnlyNumbers"/>       
    <button @click="easyBot">Make a guess</button>
    <span id="errormess" style="color: orangered; display: none"><br><br>* Only numbers! </span>
    <p id="guess" style="display: none"><br>Guess a {{highLow}} number!</p>
    <Timer />
    <p>My guess: {{userGuess}}</p>
    <p>Bot guess: {{bot}}</p>
  </div>
</template>

<script>

import Timer from '@/components/Timer.vue'

export default {
  name: 'PlayGame',
  data: function () {
    return {
      numberKeys: [],
      highLow: '',
      userGuess: 0
    }
  },

  components: {
    Timer
  },

  computed: {
      questions() {
        return this.$store.state.questions;
      },
      value() {
        return this.$store.getters.value;
      },
      number() {
        return this.$store.state.number;
      },
      bot() {
        return this.$store.state.bot;
      },
      },

  methods: {
      newValue(event) {
        this.$store.dispatch('newValue', event.target.value)
      },
      randNum: function(){
        this.num = Math.floor(Math.this.questions.length);
      },
      ranNumBot(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        this.$store.state.bot = Math.floor(Math.random() * (max - min)) + min;
      },
      makeGuess(value, number, bot) {
        if(this.value < this.questions[this.number].answer){
          this.getFormValues();
          this.highLow = 'higher';
          document.getElementById("guess").style.display = "inline";
        }
        else if (this.value > this.questions[this.number].answer){
          this.getFormValues();
          this.highLow = 'lower';
          document.getElementById("guess").style.display = "inline";
        }
        else {
          this.getFormValues();
          alert("rätt");
        }
      },
      getFormValues() {
        this.userGuess = this.$refs.my_input.value
      },
      easyBot(number, bot) {
        console.log(this.bot + " Current guess")
        if (this.bot < this.questions[this.number].answer) {
          this.ranNumBot(0, 100);
          console.log(this.bot + " Guess higher");
      }
        else if (this.bot > this.questions[this.number].answer) {
          this.ranNumBot(10, 80);
          console.log(this.bot + " Guess lower");
      } 
        else {
          alert("Bot wins this round!");
          console.log(this.bot + " Correct guess, good bot!")
          }
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

<style scoped>
</style>
