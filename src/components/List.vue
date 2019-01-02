<template>
  <div id="list">
    <section v-if="message.length>0"> {{ message }} </section>
    <h2>Highscore input test</h2>
    <label for="">Score</label>
    <input type="number" name="newPoint" v-model="newPoint">
    <button @click="storeData">Add highscore</button>
  </div>
</template>

<script>
import {db, fb} from "../firebase-config";

export default {
  name: "list",
  data() {
    return {
      newPoint: '',
      message: ''
    }
  },
  computed: {
    user() {
      return fb.auth().currentUser;
    },
    uid() {
      return fb.auth().currentUser.uid;
    },
    oldScore() {
      return this.allUsers[this.uid].newPoint
    }
  },
  created () {
    this.$bindAsObject('allUsers', db.ref('allUsers/'))
  },
  firebase: {
    users: db.ref('users'),
    allUsers: db.ref('allUsers')
  },
  methods: {
    storeData() {
      var i;
      for (let i=0; i< Object.keys(this.allUsers).length; i++) {
        if (Object.keys(this.allUsers)[i] == this.uid) {
          console.log(this.oldScore)
          this.$firebaseRefs.allUsers.child(this.uid).update({
            newPoint: parseInt(this.oldScore) + parseInt(this.newPoint)
          });
          return true;
          this.oldScore = 0
      }
        else {
          this.$firebaseRefs.allUsers.child(this.uid).set({
            newPoint: this.newPoint,
            user: this.user.email
          })
        }
      };
      this.message = "Your users is now added to the list";
    }
  }
}

</script>