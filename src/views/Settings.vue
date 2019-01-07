
  <template>
    <div>
      <p>Pick a category {{theQuestion}}</p>
      <div>
        <button class="gamebutton" @click="afunction('trams')">Trams</button>
        <button class="gamebutton" @click="afunction('history')">History</button>
        <button class="gamebutton" @click="afunction('food')">Food</button>
        <button class="gamebutton" @click="allCat()">All</button>
      </div>
      <router-link to="/playgame"><button class="gamebutton">Start Game</button></router-link>
      <button class="gamebutton" @click="logout">Logout</button>
    </div>
</template>

<script>

  import Category from '@/components/Category.vue'
  import {db} from '../firebase-config'

export default {
  name: "GameMenu",
  data() {
      return {
        theQuestion: '',
        theAnswer: ''
      }
  },
  firebase: {
    questions: db.ref('questions')
  },
  components: {},
  methods: {
    afunction: function(cat) {
      var arr = [];
      for(var i = 0; i < this.questions.length; i++){
        if (this.questions[i].category === cat) {
          arr.push(this.questions[i]);
        }
      }
      var num = Math.floor(Math.random() * arr.length);
      this.$store.state.theQuestion = arr[num].question;
      this.$store.state.theAnswer = arr[num].answer;
    },
    allCat: function() {
      var array = [];
       for (var i = 0; i < this.questions.length; i++){
         array.push(this.questions[i]);
         var num = Math.floor(Math.random() * array.length);
       }
       console.log(array[num].question);
    },

    randNum: function(){
      this.$store.state.number = Math.floor(Math.random() * this.questions.length);
      this.$store.state.numOfGuesses = 0
    },
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("login");
        });
    }
    },

  };
</script>
