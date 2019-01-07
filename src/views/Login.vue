<template>
  <div>
    <div id ="content">
      <div class="login">
        <h3>Sign In</h3>
        <input type="email" v-model="email" placeholder="Email">
        <br>
        <input type="password" v-model="password" placeholder="Password">
        <br>
        <button class="buttonsubmit" @click="login">Connection</button>
        <p>You don't have an account yet? You can create one
        <router-link to="/sign-up">here</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            this.$router.replace("highscore");
          },
          err => {
            alert("Whops, something wrong happend!" + err.message);
          }
        );
    }
  }
};
</script>