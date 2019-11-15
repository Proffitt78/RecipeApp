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
        url: "https://webknox-recipes.p.rapidapi.com/recipes/findByIngredients?number=24&ingredients=",
        recipes: []
    },
    mutations: {
        SET_USER(state, payload) {
            state.user = payload
        },
        SET_RECIPES(state, payload) {
            state.recipes = payload
        },
        SET_INGREDIENTS(state, payload){
            state.ingredients.push(payload)
        },
        RESET_INGREDIENTS(state){
            state.ingredients = []
        },
        REMOVE_INGREDIENT(state, payload){
            Vue.delete(state.ingredients, payload);
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
                    "x-rapidapi-host": "webknox-recipes.p.rapidapi.com",
                    "x-rapidapi-key": "5451a1942cmsh24d3eb999c4bbd8p1740ffjsnf0151e7628e5"
                }
            }).then(response => (commit("SET_RECIPES", response.data)))
        },
        fetchRecipeInformation({ commit }, payload){
            axios.get('https://webknox-recipes.p.rapidapi.com/recipes/' + payload + '/information', {
                "headers": {
                    "x-rapidapi-host": "webknox-recipes.p.rapidapi.com",
                    "x-rapidapi-key": "5451a1942cmsh24d3eb999c4bbd8p1740ffjsnf0151e7628e5"
                }
            }).then(response => (console.log(response.data)));
        },
        emptyIngredients({commit}){
            commit('RESET_INGREDIENTS')
            commit('SET_RECIPES', [])
        },
        removeIngredient({ commit }, payload){
            commit('REMOVE_INGREDIENT', payload)
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
        }
    },
    modules: {
    }
})
