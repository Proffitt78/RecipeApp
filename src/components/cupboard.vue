<template>
    <section id="CupboardWrap">
        <div id="CupboardHelperWrap">
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
                            <h3><span>Shit I got</span> <span>in the kitchen</span></h3>
                            <div id="DiscardListBtn" @click="emptyIngredientsList">                        
                                <v-icon>mdi-delete-empty-outline</v-icon>
                                <span>Clear List</span>
                            </div>
                        </div>
                        <ul>
                            <li v-for="(enteredIngredient, index) in getEnteredIngredients" :key="index"><span>{{ enteredIngredient }}</span><v-icon @click="removeThisIngredient(index)">mdi-delete-circle</v-icon></li>
                        </ul>
                    </section>
                </div>
                <div id="CupboardDrawer">
                    <h2><span>Shopping List</span><v-icon @click="setGoShoppingVisibility">mdi-file-find</v-icon></h2>
                    <ShoppingList />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex"
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
        ...mapActions(['setGoShoppingVisibility']),
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