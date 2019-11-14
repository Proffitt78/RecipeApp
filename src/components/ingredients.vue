<template>
    <section id="IngredientsWrap">
        <h2>Ingredients</h2>
        <v-form>
            <v-text-field 
                label="Ingredient"
                placeholder="Enter Ingredient">
                <v-icon slot="append" color="red">mdi-plus</v-icon>
                <v-icon slot="prepend" color="green">mdi-minus</v-icon>
            </v-text-field>
        </v-form>
    </section>
</template>