import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {
            firstName: 'Joey',
            lastName: 'Proffitt'
        },
        ingredients: ['bell peppers', 'oranges'],
        url: "https://webknox-recipes.p.rapidapi.com/recipes/findByIngredients?number=25&ingredients=",
        recipes: []
    },
    mutations: {
        SET_USER(state, payload) {
            state.user = payload
        },
        SET_RECIPES(state, payload) {
            state.recipes = payload
        }
    },
    actions: {
        changeUser({ commit }, payload) {
            commit("SET_USER", payload)
        },
        fetchApi({ commit }) {
            axios.get(this.getters.getIngredientsUrl, {
                "headers": {
                    "x-rapidapi-host": "webknox-recipes.p.rapidapi.com",
                    "x-rapidapi-key": "5451a1942cmsh24d3eb999c4bbd8p1740ffjsnf0151e7628e5"
                }
            }).then(response => (commit("SET_RECIPES", response.data)))
        }
    },
    getters: {
        getUser(state) {
            return state.user + " Proffitt"
        },
        getIngredientsUrl(state) {
            return state.url + state.ingredients.toString()
        }
    },
    modules: {
    }
})
