<template>
    <section id="RecipesPanel">
        <div id="Recipes">
            <h2>Recipes {{ msg }}</h2>
            <div id="RecipesTable">
                <div class="recipe" v-for="(recipe, index) in listOfRecipes" :key="index">
                    <div class="title-image-wrap">
                        <h3>{{ recipe.title }}</h3>
                        <div class="img-meta-wrap">
                            <img :src="recipe.image" />
                            <div class="meta">
                                <div class="view-recipe-btn" @click="fetchRecipeInformation(recipe.id)">
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
                <v-dialog                 
                    v-model="getDialogVisibility" 
                    class="recipe-details-dialog"
                    attach>
                    <div class="close-icon-graphical-wrapper"></div>
                    <div class="dialog-content-helper-wrap">
                        <v-icon @click="setDialogVisibility">mdi-close-circle</v-icon>
                        <h2>
                            <img :src="getRecipeDetails.image" class="recipe-details-image" />
                            <span class="recipe-details-title">{{ getRecipeDetails.title }}</span>                        
                        </h2>
                        <section class="recipe-instructions">
                            <p>{{ getRecipeDetails.instructions }}</p>                            
                        </section>                    
                        <section v-if="true" class="analyzedInstructions">
                            <ul>
                                <li v-for="(steps, index) in getRecipeDetails.analyzedInstructions" :key="index">
                                    <div class="steps-name" v-show="steps.name"><h2>test {{ steps.name }}</h2></div>                                    
                                    <ul>
                                        <li class="steps-step" v-for="(step, index) in steps.steps">
                                            <div>
                                                <span class="recipe-number">
                                                    {{ index }}
                                                </span>
                                                <span>
                                                    {{ step.step }}
                                                </span>
                                            </div>
                                        </li>
                                    </ul>                                    
                                </li>
                            </ul>
                        </section>
                    </div>
                </v-dialog>
            </div>
        </div>
    </section>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        name: 'recipes-panel',
        data() {
            return {
                dialog: false
            };
        },        
        computed: {
            ...mapGetters(['getRecipeDetails', 'getDialogVisibility'])
        },
        props: {
            msg: String,
            listOfRecipes: Array
        },
        methods: {
            ...mapActions(['fetchRecipeInformation', 'setDialogVisibility'])
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
   
</style>
