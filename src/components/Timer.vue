
<template>
  <div>
    <p>countdown: {{ time }}</p>
    <div class="healthbar">
      <div class="healthbar"
        :style = "{width: barTime + '%'}"
        style="background-color: rgb(83, 179, 238); margin: 0; color: white;">
      </div>
    </div>
    <div>
       <button v-if="!isRunning" @click="start">Start</button>
       <button v-if="isRunning" @click="stop">Stop</button>
       <button @click="reset">Reset</button>
    </div>
 </div>
</template>

<script>
export default {
  name: 'Timer',

data() {
  return {
   isRunning: false,
   barTimer: 10,
   barTime: 100,
   time:10,
   timer:null,
   sound:new Audio("http://s1download-universal-soundbank.com/wav/nudge.wav")
 }
},
mounted(){
  this.start()
},
methods: {
   start () {
     this.isRunning = true
     if (!this.timer) {
        this.timer = setInterval( () => {
          if (this.time > 0) {
             this.time--
             this.barTime = this.barTime - (100/this.barTimer)
          } else {
             clearInterval(this.timer)
             this.sound.play()
             this.reset()
          }
        }, 1000 )
     }
   },
   stop () {
     this.isRunning = false
     clearInterval(this.timer)
     this.timer = null
   },
   reset () {
      this.stop()
      this.time = 10
      this.barTime = 100
   }
  }
}
  </script>

  <style scoped>
  html {
  box-sizing:border-box;
  }

  *, *::before, *::after {
  box-sizing: inherit;
  }

  body {
  font-family: sans-serif;
  padding: 0;
  margin: 0;
  }

  button {
  padding:10px;
  }

  p {
  font-size: 2em;
  margin: 20px;
  }

  .healthbar {
      width: 250px;
      height: 40px;
      background-color: #eee;
      margin: auto;
      transition: width 1000ms;
      border-radius: 5px;
  }
  </style>
