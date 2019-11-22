<template>
    <section id="ShoppingListWrap">
        <div id="ShoppingList">
            <ul>
                <li v-for="(item, index) in getShoppingList" class="shopping-list-item">
                    {{ item.name }}
                </li>
            </ul>
        </div>
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