<template>
  <div id="list">
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
    allUsers: db.ref('allUsers')
  },
  methods: {
    storeData() {
      var i;
     for (let i = 0; i < Object.keys(this.allUsers).length; i++) {
        if (Object.keys(this.allUsers)[i] == this.user.email) {
          this.$firebaseRefs.allUsers.child(this.uid).update({
            newPoint: parseInt(this.oldScore) + parseInt(this.newPoint = 10)
          });
          return true;
      }
        else {
          this.$firebaseRefs.allUsers.child(this.uid).set({
            newPoint: this.newPoint,
            user: this.user.email
          })
        }
      }
    }
  }
}

</script>