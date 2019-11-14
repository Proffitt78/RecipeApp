<template>
    <section id="HomeWrap" class="home">
        <Ingredients />
        <Recipes
            msg="TEst"
            :listOfRecipes="recipes"/>
    </section>
</template>

<script>
// @ is an alias to /src
import Ingredients from '@/components/ingredients.vue'
import Recipes from '@/components/recipes.vue'
import { mapState } from "vuex"

export default {
  name: 'home',
  components: {
    Recipes,
    Ingredients
  },
  computed: {
      ...mapState(["recipes"])
  }
}
</script>
