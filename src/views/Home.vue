<template>
    <section id="HomeWrap" class="home container">
        <Ingredients />
        <Recipes
            msg="TEst"
            :listOfRecipes="getRecipes"/>
    </section>
</template>

<script>
// @ is an alias to /src
import Ingredients from '@/components/ingredients.vue'
import Recipes from '@/components/recipes.vue'
import { mapGetters } from "vuex"

export default {
    name: 'home',
    components: {
        Recipes,
        Ingredients
    },
    computed: {
        ...mapGetters(["getRecipes"])
    }
}
</script>
