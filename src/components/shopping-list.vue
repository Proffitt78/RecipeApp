<template>
    <section id="ShoppingListWrap">
        <h2>Shopping List</h2>
        <ul id="ShoppingList">
            <li v-for="(item, index) in getShoppingList" class="shopping-list-item">
                {{ item.name }}
            </li>
        </ul>
    </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex"


export default {
    name: 'shopping-list',
    data(){
        return{

        };
    },
    computed: {
        ...mapGetters(["getShoppingList"])
    }
}
</script>