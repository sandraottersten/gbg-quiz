<template>
  <div>
            <div id ="nav2">
      
          <router-link to="/"><button class="navbutton" type="button">Home</button></router-link>

      <router-link to="/sign-up"><button class="navbutton" v-if="!user" type="button">Signup</button></router-link>
      <router-link to="/login"><button class="navbutton" v-if="!user" type="button">Login</button></router-link>
      <p><a v-if="user" @click="logout">Logout</a></p>
    
    
</div> 
      
    <div id ="content">
  
      
    <h3>Game rules</h3>
    <p>Try to guess the correct number. You and your opponents will take turns and you
    have 10 seconds to give your answer. After every answer you will be given an indication
    if the correct number is higher or lower than the last guess. When the correct answer
    is given, the game is over. Good luck!</p>
    <router-link to="/gamemenu"><button class="gamebutton">Back</button></router-link>
  </div>
      
    </div>
</template>

<script>


export default {
  name: "rules",

};
</script>
