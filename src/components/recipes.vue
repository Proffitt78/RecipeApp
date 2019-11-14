<template>
    <section id="RecipesWrap">
        <div id="Recipes">
            <h2>Recipes {{ msg }}</h2>
            <div class="recipe" v-for="(recipe, index) in listOfRecipes" :key="index">
                <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                        <h3 v-on="on">{{ recipe.title }}</h3>
                    </template>
                    <span>test</span>
                </v-tooltip>
                <img :src="recipe.image" />
                <section class="ingredients-used">
                    <div v-for="(ingredient, index) in recipe.usedIngredients" class="ingredient">
                        {{ ingredient.name }}
                    </div>
                </section>
                <div class="ingredients-missed">
                    <div v-for="(ingredient, index) in recipe.missedIngredients" class="ingredient">
                        {{ ingredient.name }}
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

    export default {
        name: 'recipes',
        data() {
            return {
            };
        },        
        computed: {
            
        },        
        props: {
            msg: String,
            listOfRecipes: []
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
   
</style>
