<template>    
    <v-app id="app">
        <header id="RecipeHeader">
            <div id="HeaderContent" class="container">
                <h1><router-link to="/">What's in the motherfuckin' kitchen?</router-link></h1>
                <div id="OtherLinks">
                    <router-link to="/about">About</router-link>
                </div>                
            </div>
        </header>
        <section id="MainView">
            <router-view/>
        </section>
        <footer id="RecipeFooter">
            <div id="FooterContent">
                <p>Joey Proffitt <span>&copy;{{ thisYear }}</span></p>
            </div>
        </footer>
    </v-app>
</template>

<script>
export default {
    data(){
        return {
            thisYear: '2019'
        };
    },
    created(){
    }
}
</script>

<style lang="less">
    @import "./css/main.less";
</style>