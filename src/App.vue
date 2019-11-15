<template>    
    <v-app id="app">
        <div id="nav" class="container">
            <router-link to="/"><h1>What's in the motherfuckin' kitchen?</h1></router-link> |
            <router-link to="/about">About</router-link>
        </div>
        <router-view/>
    </v-app>
</template>

<script>
export default {
    data(){
        return {

        };
    },
    created(){
    }
}
</script>

<style lang="less">
    @import "./css/main.less";
</style>