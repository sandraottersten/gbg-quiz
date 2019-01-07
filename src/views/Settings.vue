<template>
  <div>
  <Category />
  </div>
</template>

<script>

  import Category from '@/components/Category.vue'


  export default {
    name: "GameMenu",
    data() {
      return {
      theQuestion: ''
    }
    },

    components: {
      Category
    },

  };
</script>
