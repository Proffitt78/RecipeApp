<template>
    <section id="IngredientsWrap">
        <h2>Ingredients</h2>
        <v-form @submit.prevent>
            <v-text-field 
                ref="ingredientsInput"
                label="Ingredient"
                v-model="ingredient"
                placeholder="Enter Ingredient"
                v-on:keyup.enter="enterIngredient">
                <v-icon slot="append" color="red">mdi-plus</v-icon>
                <v-icon slot="prepend" color="green">mdi-minus</v-icon>
            </v-text-field>
        </v-form>
        <button @click="emptyIngredientsList">Empty</button>
        <section class="entered-ingredients-list">
            <div v-for="(enteredIngredient, index) in ingredients">{{ enteredIngredient }}</div>
        </section>
    </section>
</template>

<script>
import { mapState } from "vuex"

export default {
    data(){
        return{
            ingredient: ''
        };
    },
    computed: {
        ...mapState(["ingredients"])
    },
    methods: {
        enterIngredient(){
            this.$store.dispatch('fetchApi', this.ingredient)
            this.ingredient = ''
            // this.$refs.ingredientsInput.focus()
        },
        emptyIngredientsList(){
            this.$store.dispatch('emptyIngredients')
        }
    }
}
</script>