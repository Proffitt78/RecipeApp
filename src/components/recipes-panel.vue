<template>
    <section id="RecipesPanel">
        <div id="Recipes">
            <div v-if="listOfRecipes.length == 0" id="LandingPage" class="landing-page">
                <span id="SpanEnter">Enter</span> <span id="SpanSome">some</span> <span id="SpanIngredients">ingredients</span>
                <v-icon id="LandingPointer">mdi-cursor-pointer</v-icon>
                <span class="landing-description" id="FindRecipes">
                    Find recipes by entering stuff you have!
                </span>
                <span class="landing-description" id="Fridge">
                    Look in the fridge!!!
                </span>
                <span class="landing-description landing-question" id="Cabinets">
                    What's in the cabinets?!?!
                </span>
                <span class="landing-description landing-question" id="Crap">
                    What am I supposed to make with this crap???                        
                </span>
            </div>
            <div id="RecipesTable" v-else>
                <div class="recipe" v-for="(recipe, index) in listOfRecipes" :key="index">
                    <section class="title-image-wrap">
                        <h3>{{ recipe.title }}</h3>
                        <div class="img-meta-wrap">
                            <div class="recipe-image-wrap">
                                <img :src="recipe.image" />
                            </div>
                            <div class="meta">
                                <div class="view-recipe-btn" @click="fetchRecipeInformation(recipe.id)">
                                    <h4>Recipe</h4>
                                    <v-icon>mdi-file-eye</v-icon>
                                </div>
                            </div>
                        </div>                                            
                    </section>                    
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
                                <li v-for="(ingredient, index) in recipe.missedIngredients" class="ingredient"  :class="{'in-cart': getShoppingList.find(function(x) {return x.id == ingredient.id})}">
                                    <v-icon @click="fetchApi(ingredient.name)">mdi-transfer-left</v-icon>
                                    <div class="missed-ingredient">
                                        <span>{{ ingredient.name }}</span>
                                        <v-icon @click="addToShoppingList(ingredient)">mdi-cart-arrow-down</v-icon>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>


                <!-- RECIPE DETAILS -->
                <v-dialog                 
                    v-model="dialog"
                    class="recipe-details-dialog"
                    attach>
                    <div class="bg-images" :style="{backgroundImage:'url(' + getRecipeDetails.image + ')'}"></div>
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
            ...mapGetters(['getRecipeDetails', 'getDialogVisibility', 'getShoppingList'])
        },
        props: {
            msg: String,
            listOfRecipes: Array
        },
        methods: {
            ...mapActions(['fetchRecipeInformation', 'setDialogVisibility', 'fetchApi', 'addToShoppingList'])
        },
        watch: {
            getDialogVisibility: function(){
                this.dialog = !this.dialog
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
   
</style>
