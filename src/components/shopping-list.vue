<template>
    <section id="ShoppingListWrap">
        <ul id="ShoppingList">
            <li v-for="(item, index) in getShoppingList" class="shopping-list-item">
                <span>{{ item.name }}</span>
                <span>
                    <v-icon @click="removeShoppingListItem(index)">mdi-cart-remove</v-icon>
                </span>
            </li>
        </ul>
        <section id="ShoppingViewWrap">
            <v-dialog
                v-model="dialog"
                attach>
                <h2>Shopping</h2>
                <ul id="GoShoppingList">
                    <li v-for="(item, index) in getShoppingList" class="shopping-list-item">
                        <span>{{ item.name }}</span>
                        <span>
                            <v-icon @click="removeShoppingListItem(index)">mdi-cart-remove</v-icon>
                        </span>
                    </li>
                </ul>
            </v-dialog>
        </section>
    </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex"


export default {
    name: 'shopping-list',
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