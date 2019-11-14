<template>
    <div class="hello">
        <p>{{ msg }}</p>
        <h2>Recipes</h2>
        <div class="recipes" v-for="(recipe, index) in listOfRecipes">
            <h2>{{ recipe.title }}</h2>
            <img :src="recipe.image" />
        </div>
    </div>
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
