<template>
    <section id="CupboardWrap">
        <div id="HelperWrap">
            <div id="InnerHelperWrap">
                <div id="CupboardContents">
                    <v-form @submit.prevent>
                        <h2 id="CupboardHeader">DaFuk you got??</h2>
                        <v-text-field 
                            class="ingredient-input"
                            id="IngredientsInput"
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
                                <v-icon>mdi-delete-empty-outline</v-icon>
                            </div>
                        </div>
                        <ul>
                            <li v-for="(enteredIngredient, index) in getEnteredIngredients" :key="index"><span>{{ enteredIngredient }}</span><v-icon @click="removeThisIngredient(index)">mdi-delete-circle</v-icon></li>
                        </ul>
                    </section>
                </div>
                <div id="CupboardDrawer">
                    <ShoppingList />
                </div>
            </div>
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