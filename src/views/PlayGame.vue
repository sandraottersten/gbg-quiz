<template>  
  <div id ="content">  
    <h3>Question</h3>
    <h1>{{theQuestion}}</h1>
    <flash-message class="myCustomClass"></flash-message>
    <input id="guess" @input="newValue" type="number" autofocus="this.value=''" v-on:keypress.enter = "makeGuess"/>
    <button class="guessbutton" @click="makeGuess">Make a guess</button>
    <span id="errormess" style="color: orangered; display: none"><br><br>* Endast siffror! </span>
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
Vue.use(VueFlashMessage);


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
      show: true
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
    ranNumBot() {
        this.$store.state.bot = Math.floor(Math.random() * 100) + 1;
          this.start();
    },
    makeGuess(value, number, bot) {
      var input = document.getElementById("guess");
      if(this.value < this.$store.state.theAnswer){
        this.$store.state.numOfGuesses++
        this.stop()
        this.ranNumBot();
        this.reset();
        this.flash('Higher', 'error', {
          timeout: 1500,
          important: true
        });
        input.value = "";
      }
      else if (this.value > this.$store.state.theAnswer){
        this.$store.state.numOfGuesses++
        this.stop()
        this.ranNumBot();
        this.reset();
        this.start();
        this.flash('Lower', 'error', {
          timeout: 1500,
          important: true
      });
      input.value = "";
      }
      else if (this.value == this.$store.state.theAnswer && this.user){
        this.$store.state.numOfGuesses++
        //when bot wins
        //this.$store.state.winner = false
        this.show = false
        this.stop()
        this.storeData()
        this.$router.push({ path: 'winner' })
      }
      else {
        this.$store.state.numOfGuesses++
        //when bot wins
        //this.$store.state.winner = false
        this.show = false
        this.stop()
        this.$router.push({ path: 'winner' })
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


