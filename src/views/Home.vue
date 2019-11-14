<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Recipes 
        msg="TEst"
        :listOfRecipes="recipes"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Recipes from '@/components/recipes.vue'
import { mapState } from "vuex"

export default {
  name: 'home',
  components: {
    Recipes
  },
  computed: {
      ...mapState(["recipes"])
  }
}
</script>
