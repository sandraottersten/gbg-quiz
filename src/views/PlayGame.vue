<template>
  <div>
    <h3>Question</h3>
    <h1>{{questions[number].question}}</h1>
    <input type="number" :value="value" @input="newValue">
    <button @click="makeGuess">Make a guess</button>
    <p>My guess: {{value}}</p>
    <p>Bot guess: {{bot}}</p>
  </div>
</template>

<script>
export default {
  name: 'PlayGame',
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
      newValue(event) {
        this.$store.dispatch('newValue', event.target.value)
      },
      makeGuess(value, number, bot) {
        if(this.value < this.questions[this.number].answer){
          alert("högre");
          this.$store.state.bot = Math.floor(Math.random() * 100) + 1;
        }
        else if (this.value > this.questions[this.number].answer){
          alert("lägre");
          this.$store.state.bot = Math.floor(Math.random() * 100) + 1;
        }
        else {
          alert("rätt");
        }

      }
    }

};

</script>


<style scoped>

</style>
