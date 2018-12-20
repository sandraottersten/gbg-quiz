<template>
  <div id="app">
    <div id="nav">
      <router-link to="/sign-up"><button v-if="!user" type="button">Signup</button></router-link>
      <router-link to="/login"><button v-if="!user" type="button">Login</button></router-link>
      <p><a v-if="user" @click="logout">Logout</a></p>
    </div>
    <router-view/>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: "app",
    data () {
    return {
      user: null
    }
  },
  methods: {
        logout() {
      firebase.auth().signOut()
        .then(() => {
          this.$router.push({path: '/'});
        });
    }
  },  created: function () {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          this.user = user;
        } else {
          this.user = null;
        }
      });
    }
};
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
