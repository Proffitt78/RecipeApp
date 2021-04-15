<template>
    <section id="HomeWrap" class="home app-container">
        <div id="HomeHelperWrap">
            <Cupboard />
            <RecipesPanel
                msg="TEst"
                :listOfRecipes="getRecipes"/>
        </div>      
        <ShoppingView />  
    </section>
</template>

<script>
// @ is an alias to /src
import Cupboard from '@/components/cupboard.vue'
import RecipesPanel from '@/components/recipes-panel.vue'
import ShoppingView from '@/components/shopping-view.vue'
import { mapGetters } from "vuex"

export default {
    name: 'home',
    components: {
        RecipesPanel,
        Cupboard,
        ShoppingView
    },
    computed: {
        ...mapGetters(["getRecipes"])
    }
}
</script>
