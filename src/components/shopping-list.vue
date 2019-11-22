<template>
    <section id="ShoppingListWrap">
        <dif id="ShoppingList">
            <ul>
                <li v-for="(item, index) in getShoppingList" class="shopping-list-item">
                    {{ item.name }}
                </li>
            </ul>
        </dif>
    </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex"


export default {
    data(){
        return{

        };
    },
    computed: {
        ...mapGetters(["getShoppingList"])
    }
}
</script>