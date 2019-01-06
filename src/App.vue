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
    
 @import url('https://fonts.googleapis.com/css?family=Pattaya');    
    
    
body {
background: lightblue url("gbg.gif"); 
    }
    
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: aliceblue;
  border-radius: 20px;
  padding: 50px;
  width: 60%;
margin: auto;
margin-top: 100px;
font-size: 18px;
   opacity: 0.95;

}
#nav {
  padding: 30px;
border-bottom: 1px solid #70d3f3;
margin-bottom: 20px;
}

#nav a {
  font-weight: bold;
  color: #2484e4;
  padding: 13px;
text-transform: uppercase;
text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #70d3f3;
  text-decoration: underline;

}
    
#nav a:hover{
  color: #70d3f3;
    transition: 0.4s;

}
  
    
#highscore{

background-color: #fec84e;
background-image: linear-gradient(315deg, #fec84e 0%, #ffdea8 74%);    
border: 2px solid gold;
display: block;  
width: 50%;
padding: 50px;
margin: auto;
text-align: center;
border-radius: 30px;
    }     
    
    
h1 {

color:cornflowerblue;
font-size: 30px;
font-family: 'Avenir', sans-serif;
margin: 1px 1px 1px 1px;
 
}
    
h2 {

color:cornflowerblue;
font-size: 50px;
font-family: 'Pattaya', sans-serif;
margin: 1px 1px 1px 1px;
}    
    

h3 {

color:cornflowerblue;
font-size: 30px;
font-family: 'Pattaya', sans-serif;
margin: 1px 1px 1px 1px;
}  
    
    
.startgamebutton {

background-color: deepskyblue;
font-size: 30px;
color: white;
padding: 10px 40px 10px 40px;
font-family: 'Pattaya', sans-serif;
border: 1px solid deepskyblue;
cursor: pointer;
border-radius: 20px;


}
    
.startgamebutton span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.startgamebutton span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}
.startgamebutton:hover span {
  padding-right: 25px;
}

.startgamebutton:hover span:after {
  opacity: 1;
  right: 0;
}
    
    
.guessbutton {

background-color: deepskyblue;
font-size: 15px;
margin: 5px;
color: white;
padding: 7px;
font-family: 'Avenir', sans-serif;
font-weight: 600;
border-radius: 20px;
border: 1px solid deepskyblue;
cursor: pointer;

}
    
.guessbutton:hover {
  background-color: skyblue;
  color: white;
  transition: 0.4s;

}
    
.buttonsubmit {

background-color: deepskyblue;
font-size: 20px;
color: white;
padding: 8px;
margin: 10px;
font-family: 'Avenir', sans-serif;
font-weight: 600;
border: 1px solid deepskyblue;
cursor: pointer;
border-radius: 20px;


}

.buttonsubmit:hover {
  background-color: skyblue;
  color: white;
  transition: 0.4s;

}

.gamebutton {

background-color: deepskyblue;
font-size: 15px;
border-radius: 20px;
border: 1px solid deepskyblue;
margin-left: 10px;
color: white;
padding: 5px 17px 5px 17px;
font-family: 'Avenir', sans-serif;
font-weight: 600;
cursor: pointer;
margin: 0px 10px 10px 0px;

}
    
.gamebutton:hover {
  background-color: skyblue;
  color: white;
  transition: 0.4s;

}
    
input[type=text], input[type=password] {
  padding: 10px;
  margin: 8px;
font-size: 15px;
  display: inline-block;
  border: 1px solid #70d3f3;
  border-radius: 4px;
  box-sizing: border-box;
  text-transform: uppercase;
font-family: 'Avenir', sans-serif;
font-weight: 500;


  
}    
    
    
    
</style>
