<template>
  <div id="app">
    <h3>Question</h3>
    <h1>{{questions[number].question}}</h1>
    <input ref="my_input" @input="newValue" type="number" onfocus="this.value=''" v-on:keypress = "OnlyNumbers"/>       
    <button @click="makeGuess">Make a guess</button>
    <span id="errormess" style="color: orangered; display: none"><br><br>* Only numbers! </span>
    <p id="guess" style="display: none"><br>Guess a {{highLow}} number!</p>
    <!-- <Timer /> -->
    <p>My guess: {{userGuess}}</p>
    <p>Bot guess: {{bot}}</p>
  </div>
</template>

<script>

// import Timer from '@/components/Timer.vue'

export default {
  name: 'PlayGame',
  data: function () {
    return {
      numberKeys: [],
      botGuesses: [],
      highLow: '',
      userGuess: 0,
      maxGuess: 100,
      minGuess: 3
    }
  },

  // components: {
  //   Timer
  // },

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
        const isInArray = this.botGuesses.includes(this.bot);
        min = Math.ceil(min);
        max = Math.floor(max);
        this.$store.state.bot = Math.floor(Math.random() * (max - min)) + min;
        if (this.$store.state.bot != isInArray) {
            this.botGuesses.push(this.$store.state.bot);
        } 
        console.log(this.botGuesses);
        },
      makeGuess(value, number, bot) {
        this.easyBot();
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
          alert("Player1 wins this round!");
        }
      },
      getFormValues() {
        this.userGuess = this.$refs.my_input.value
      },
      easyBot(number, bot, botGuesses) {
        // console.log(this.bot + " Current guess");
        const isInArray = this.botGuesses.includes(bot);
        if (this.bot < this.questions[this.number].answer) {
          this.maxGuess--;
          this.ranNumBot(0, this.maxGuess);
          console.log(this.maxGuess + " max Guess");
          console.log(this.bot + " Guess higher");
      }
        else if (this.bot > this.questions[this.number].answer) {
          this.maxGuess--;
          this.ranNumBot(this.minGuess, this.maxGuess);
          console.log(this.minGuess + " min Guess");
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
