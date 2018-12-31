<template>
  <div id="list">
    <section v-if="message.length>0"> {{ message }} </section>
    <h2>Highscore input test</h2>
    <label for="">Score</label>
    <input type="text" name="point" v-model="point">
    <button @click="storeData">Add highscore</button>
  </div>
</template>

<script>
import {db, fb} from "../firebase-config";

export default {
  name: "list",
  data() {
    return {
      point: '',
      message: ''
    }
  },
  computed: {
    user() {
      return fb.auth().currentUser;
    }
  },
  created () {
    this.$bindAsObject('users', db.ref('users/' + this.user.uid))
    this.$bindAsObject('allUsers', db.ref('allUsers/'+ this.user.uid))
  },
  firebase: {
    users: db.ref('users'),
    allUsers: db.ref('allUsers')
  },
  methods: {
    storeData() {
      var point = this.point
      this.$firebaseRefs.users.push({
        point: point
      },(error) => {
        if (error) {
          console.log(error)
        }
        else {
          this.$firebaseRefs.allUsers.push({
            point: point,
            user: this.user.email
          })
        }
      })
      this.message = "Your users is now added to the list";
      this.point = ''
    }
  }
}

</script>