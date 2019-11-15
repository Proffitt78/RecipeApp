<template>
    <section id="RecipesWrap">
        <div id="Recipes">
            <h2>Recipes {{ msg }}</h2>
            <div id="RecipesTable">
                <div class="recipe" v-for="(recipe, index) in listOfRecipes" :key="index">
                    <div class="title-image-wrap">
                        <h3>{{ recipe.title }}</h3>
                        <div class="img-meta-wrap">
                            <img :src="recipe.image" />
                            <div class="meta">
                                <div class="view-recipe-btn" @click="$store.dispatch('fetchRecipeInformation', recipe.id)">
                                    <h4>Recipe</h4>
                                    <v-icon>mdi-file-eye</v-icon>
                                </div>
                            </div>
                        </div>                                            
                    </div>                    
                    <section class="ingredients-wrap">
                        <div class="ingredients-used">
                            <h4>What you got!</h4>
                            <ul>
                                <li v-for="(ingredient, index) in recipe.usedIngredients" class="ingredient">
                                    {{ ingredient.name }}
                                </li>
                            </ul>
                        </div>
                        <div class="ingredients-missed">
                            <h4>What you <span>don't</span> got.</h4>
                            <ul>
                                <li v-for="(ingredient, index) in recipe.missedIngredients" class="ingredient">
                                    {{ ingredient.name }}
                                </li>
                            </ul>
                        </div>
                    </section>
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
            listOfRecipes: Array
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
   
</style>
