<template>
  <div id="app">
    <h3>Question</h3>
    <h1>{{questions[number].question}}</h1>

    <input  @input="newValue" type="number" onfocus="this.value=''" v-on:keypress = "OnlyNumbers"/>
    <button @click="makeGuess">Make a guess</button>
    <span id="errormess" style="color: orangered; display: none"><br><br>* Endast siffror! </span>
    <Timer v-show="show" ref="form"/>
    <p>My guess: {{value}}</p>
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
      show: true
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
      ranNumBot() {
        this.$store.state.bot = Math.floor(Math.random() * 100) + 1;
      },
      makeGuess(value, number, bot) {
        if(this.value < this.questions[this.number].answer){
          this.stop()
          alert("högre");
          this.ranNumBot();
          this.reset()
          this.start()

        }
        else if (this.value > this.questions[this.number].answer){
          this.stop()
          alert("lägre");
          this.ranNumBot();
          this.reset()
          this.start()
        }
        else {
          this.show = false
          this.stop()
          alert("rätt");
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
