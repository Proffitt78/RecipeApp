<template>
    <section id="CupboardWrap">
        <h2>Cupboard</h2>
        <div id="CupboardContents">
            <v-form @submit.prevent>
                <v-text-field 
                    ref="ingredientsInput"
                    label=""
                    v-model="ingredient"
                    placeholder="Enter ingredients you have HERE"
                    v-on:keyup.enter="enterIngredient">
                </v-text-field>
            </v-form>
            <section id="AvailableIngredientsList" v-if="getEnteredIngredients.length > 0" class="entered-ingredients-list">
                <div id="AvailableIngredientsListHeader">
                    <h3>Shit I got in the kitchen</h3>
                    <div id="DiscardListBtn" @click="emptyIngredientsList">
                        <span>Discard List</span>
                        <v-icon>mdi-delete-empty-outline</v-icon>
                    </div>
                </div>
                <ul>
                    <li v-for="(enteredIngredient, index) in getEnteredIngredients" :key="index"><span>{{ enteredIngredient }}</span><v-icon @click="removeThisIngredient(index)">mdi-delete-circle</v-icon></li>
                </ul>
            </section>
        </div>
        <div id="CupboardDrawer">
            <p>Put the shopping list here</p>
            <ShoppingList />
        </div>        
    </section>
</template>

<script>
import { mapState, mapGetters } from "vuex"
import ShoppingList from '@/components/shopping-list.vue'

export default {
    data(){
        return{
            ingredient: ''
        };
    },
    components: {
        ShoppingList
    },
    computed: {
        ...mapGetters(["getEnteredIngredients"])
    },
    methods: {
        enterIngredient(){
            this.$store.dispatch('fetchApi', this.ingredient)
            this.ingredient = ''
            // this.$refs.ingredientsInput.focus()
        },
        emptyIngredientsList(){
            this.$store.dispatch('emptyIngredients')
        },
        removeThisIngredient(payload){
            this.$store.dispatch('removeIngredient', payload).then(
                this.$store.dispatch('fetchApi')
            )
        }
    }
}
</script>