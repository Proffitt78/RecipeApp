import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import { stat } from 'fs';


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {
            firstName: 'Joey',
            lastName: 'Proffitt'
        },
        ingredients: [],
        url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=6&ranking=1&ignorePantry=false&ingredients=",
        recipes: [],
        recipeDetails: {},
        dialogVisibility: false
    },
    mutations: {
        SET_USER(state, payload) {
            state.user = payload
        },
        SET_RECIPES(state, payload) {
            state.recipes = payload
        },
        SET_RECIPE_DETAILS(state, payload){
            state.recipeDetails = payload
        },
        SET_INGREDIENTS(state, payload){
            state.ingredients.push(payload)
        },
        RESET_INGREDIENTS(state){
            state.ingredients = []
        },
        REMOVE_INGREDIENT(state, payload){
            Vue.delete(state.ingredients, payload);
        },
        SET_DIALOG_VISIBILITY(state){
            state.dialogVisibility = !state.dialogVisibility
        }
    },
    actions: {
        changeUser({ commit }, payload) {
            commit("SET_USER", payload)
        },
        fetchApi({ commit }, payload) {
            commit('SET_INGREDIENTS', payload)
            axios.get(this.getters.getIngredientsUrl, {
                "headers": {
                    "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                    "x-rapidapi-key": "5451a1942cmsh24d3eb999c4bbd8p1740ffjsnf0151e7628e5"
                }
            }).then(response => (commit("SET_RECIPES", response.data)))
        },
        async fetchRecipeInformation({ commit }, payload){
            await axios.get('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/' + payload + '/information', {
                "headers": {
                    "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                    "x-rapidapi-key": "5451a1942cmsh24d3eb999c4bbd8p1740ffjsnf0151e7628e5"
                }
            }).then(async (response) => {
                await commit('SET_RECIPE_DETAILS', response.data)
                commit('SET_DIALOG_VISIBILITY')
            });
        },
        emptyIngredients({commit}){
            commit('RESET_INGREDIENTS')
            commit('SET_RECIPES', [])
        },
        removeIngredient({ commit }, payload){
            commit('REMOVE_INGREDIENT', payload)
        },
        setDialogVisibility({ commit }){
            commit('SET_DIALOG_VISIBILITY')
        }
    },
    getters: {
        getUser(state) {
            return state.user + " Proffitt"
        },
        getIngredientsUrl(state) {
            return state.url + state.ingredients.toString()
        },
        getEnteredIngredients(state){
            return state.ingredients.filter(Boolean)
        },
        getRecipes(state){
            return state.recipes
        },
        getRecipeDetails(state){
            return state.recipeDetails
        },
        getDialogVisibility(state){
            return state.dialogVisibility
        }
    },
    modules: {
    }
})
