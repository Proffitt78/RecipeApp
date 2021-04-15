<template>
    <section id="ShoppingViewWrap">
            <v-dialog
                v-model="dialog"
                attach
                hide-overlay
                content-class="shopping-view-wrap">
                <h2>Gotta Shop Bitch</h2>
                <ul id="GoShoppingList">
                    <li v-for="(item, index) in getShoppingList" class="shopping-list-item">
                        <div>
                            <span>        
                                <v-icon>mdi-radiobox-blank </v-icon>
                            </span>
                            <span class="list-item">{{ item.name }}</span>
                        </div>
                        <div>
                            <v-icon @click="removeShoppingListItem(index)">mdi-cart-remove</v-icon>
                        </div>
                    </li>
                </ul>
            </v-dialog>
        </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {

    data(){
        return{
            dialog: false
        };
    },
    computed: {
        ...mapGetters(['getShoppingList', 'getGoShoppingVisibility'])
    },
    methods: {
        ...mapActions(["removeShoppingListItem"])
    },
    watch: {
        getGoShoppingVisibility: function(){
            this.dialog = !this.dialog
        }
    }
}
</script>