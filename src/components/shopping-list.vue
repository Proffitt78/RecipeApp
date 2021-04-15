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
        
    </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {
    name: 'shopping-list',    
    computed: {
        ...mapGetters(['getShoppingList'])
    },
    methods: {
        ...mapActions(["removeShoppingListItem"])
    }
}
</script>