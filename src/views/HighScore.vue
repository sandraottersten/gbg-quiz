<template>
  <div id="highscore">
    <p>This is just to see if it works!</p>
    <List/>
    <HighscoreList />
  </div>
</template>

<script>
import List from "@/components/List";
import HighscoreList from "@/components/HighscoreList"

export default {
  name: "highscore",
  components: {
    List,
    HighscoreList
  },
  methods: {
  }
};
</script>