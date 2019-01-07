<template>

<div>
    
    
          <div id ="nav2">
      
          <router-link to="/"><button class="navbutton" type="button">Home</button></router-link>
      <router-link to="/sign-up"><button class="navbutton" v-if="!user" type="button">Signup</button></router-link>
      <router-link to="/login"><button class="navbutton" v-if="!user" type="button">Login</button></router-link>
      <p><a v-if="user" @click="logout">Logout</a></p>
    
    
</div> 
    


<div id ="content">


  <div class="sign-up">
    <h3>Let's create you a new account!</h3>
    <input type="text" v-model="email" placeholder="Email">
    <br>
    <input type="password" v-model="password" placeholder="Password">
    <br>
    <button class="buttonsubmit" @click="signUp">Sign Up</button>
    <br>
    <span>or go back to
      <router-link to="/login">login</router-link>.
    </span>
  </div>
    </div>
    </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "signUp",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signUp: function() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          (user) => {
            this.$router.replace("/");
          },
          function(err) {
            alert("Whoops.." + err.message);
          }
        );
    }
  }
};
</script>
